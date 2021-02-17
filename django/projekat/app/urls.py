from django.contrib import admin
from django.urls import path
from .views import MajiceChartView, PatikeChartView

app_name = 'app'
urlpatterns = [
    path('majice/', MajiceChartView.as_view(), name='majice'),
    path('patike/', PatikeChartView.as_view(), name='patike'),
]
