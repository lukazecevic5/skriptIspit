from django.shortcuts import render
from .models import Majice, Patike
from django.views.generic import TemplateView

class MajiceChartView(TemplateView):
    template_name = 'majice/chart.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["qs"] = Majice.objects.all()
        return context

class PatikeChartView(TemplateView):
    template_name = 'patike/chart.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["qs"] = Patike.objects.all()
        return context
