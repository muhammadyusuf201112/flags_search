from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.


class Index(TemplateView):
    template_name = 'index.html'

    
class Country(TemplateView):
    template_name = 'country.html'

