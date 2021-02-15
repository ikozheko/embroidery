from django.http.response import HttpResponse, JsonResponse
from .models import FlossThread
from django.core import serializers


def FlossThreadList(View):
    qs = FlossThread.objects.all()
    content = serializers.serialize('json', qs)
    return HttpResponse(content)

