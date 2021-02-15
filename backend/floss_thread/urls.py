from django.urls import path
from .views import FlossThreadList

urlpatterns = [
    path('', FlossThreadList),
]