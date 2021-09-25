from authnapp.models import ListUser
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import ListUserSerializer

# Create your views here.


class ListUserModelViewSet(ModelViewSet):
    queryset = ListUser.objects.all()
    serializer_class = ListUserSerializer