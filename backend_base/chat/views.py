from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from pypdf import PdfReader
import os
from django.conf import settings
import json
from django.core.mail import send_mail
openai = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# openai = OpenAI()

class ChatBoxView(APIView):

    def push(self, message):
        print(f"Push: {message}")

        # Send email notification
        send_mail(
            subject='New Notification',
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['udayullengala.work@gmail.com'],
            fail_silently=False
        )

    def record_user_details(self, email, name="Name not provided", notes="not provided"):
        self.push(f"Recording interest from {name} with email {email} and notes {notes}")
        return {"recorded": "ok"}
    
    def record_unknown_question(self, question):
        self.push(f"Recording {question} asked that I couldn't answer")
        return {"recorded": "ok"}
    
    def create_tools(self):
        record_user_details_json = {
            "name": "record_user_details",
            "description": "Use this tool to record that a user is interested in being in touch and provided an email address",
            "parameters": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                        "description": "The email address of this user"
                    },
                    "name": {
                        "type": "string",
                        "description": "The user's name, if they provided it"
                    }
                    ,
                    "notes": {
                        "type": "string",
                        "description": "Any additional information about the conversation that's worth recording to give context"
                    }
                },
                "required": ["email"],
                "additionalProperties": False
            }
        }

        record_unknown_question_json = {
            "name": "record_unknown_question",
            "description": "Always use this tool to record any question that couldn't be answered as you didn't know the answer",
            "parameters": {
                "type": "object",
                "properties": {
                    "question": {
                        "type": "string",
                        "description": "The question that couldn't be answered"
                    },
                },
                "required": ["question"],
                "additionalProperties": False
            }
        }
        tools = [{"type": "function", "function": record_user_details_json}, {"type": "function", "function": record_unknown_question_json}]
        
        return tools
    
    def handle_tool_calls(self, tool_calls):
        results = []
        for tool_call in tool_calls:
            tool_name = tool_call.function.name
            arguments = json.loads(tool_call.function.arguments)
            print(f"Tool called: {tool_name}", flush=True)
            tool = getattr(self, tool_name, None)
            result = tool(**arguments) if tool else {}
            results.append({"role": "tool","content": json.dumps(result),"tool_call_id": tool_call.id})
        return results

    def post(self, request):
        user_message = request.data.get("message")

        if not user_message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        history = json.loads(request.data.get("history")) if request.data.get("history") else []
        # print(history)
        pdf_path = os.path.join(settings.BASE_DIR, "me", "linkedin.pdf")
        reader = PdfReader(pdf_path)
        linkedin = ""
        for page in reader.pages:
            text = page.extract_text()
            if text:
                linkedin += text

        # print(linkedin)
        summary_path = os.path.join(settings.BASE_DIR, "me", "summary.txt")
        with open(summary_path, "r", encoding="utf-8") as f:
            summary = f.read()

        name = "Uday Ullengala"

        system_prompt = f"You are acting as {name}. You are answering questions on {name}'s website, \
        particularly questions related to {name}'s career, background, skills and experience. \
        Your responsibility is to represent {name} for interactions on the website as faithfully as possible. \
        You are given a summary of {name}'s background and LinkedIn profile which you can use to answer questions. \
        Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
        If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
        If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool. "

        system_prompt += f"\n\n## Summary:\n{summary}\n\n## LinkedIn Profile:\n{linkedin}\n\n"
        system_prompt += f"With this context, please chat with the user, always staying in character as {name}."

        try:
            messages = [{"role": "system", "content": system_prompt}] + history + [{"role": "user", "content": user_message}]
            done = False
            while not done:
                response = openai.chat.completions.create(model="gpt-4o-mini", messages=messages, tools=self.create_tools())
                finish_reason = response.choices[0].finish_reason

                if finish_reason=="tool_calls":
                    message = response.choices[0].message
                    tool_calls = message.tool_calls
                    results = self.handle_tool_calls(tool_calls)
                    messages.append(message)
                    messages.extend(results)
                else:
                    done = True

            answer = response.choices[0].message.content
            return Response({"reply": answer})
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
