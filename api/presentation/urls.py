from django.urls import path

from presentation.views import PresentationAPIView

urlpatterns = [
    path('presentations/', PresentationAPIView.as_view()),
]
