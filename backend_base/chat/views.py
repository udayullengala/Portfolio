from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from pypdf import PdfReader
import os
from django.conf import settings
import json
# openai = OpenAI(api_key=os.getenv("GOOGLE_API_KEY"))
gemini = OpenAI(
    api_key=os.getenv("GOOGLE_API_KEY"), 
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

class ChatBoxView(APIView):

    def post(self, request):
        user_message = request.data.get("message")

        if not user_message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # history = json.loads(request.data.get("history")) if request.data.get("history") else []
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
        If you don't know the answer, say so."

        system_prompt += f"\n\n## Summary:\n{summary}\n\n## LinkedIn Profile:\n{linkedin}\n\n"
        system_prompt += f"With this context, please chat with the user, always staying in character as {name}."

        try:
            messages = [{"role": "system", "content": system_prompt}] + [{"role": "user", "content": user_message}]
            response = gemini.chat.completions.create(model="gemini-2.0-flash", messages=messages)
            answer = response.choices[0].message.content
            return Response({"reply": answer})
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
