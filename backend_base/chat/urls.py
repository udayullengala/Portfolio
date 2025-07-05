from django.urls import path
from .views import ChatBoxView

urlpatterns = [
    path("chat/", ChatBoxView.as_view(), name="chatbox")
]
