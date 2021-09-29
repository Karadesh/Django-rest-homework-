from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from Todo import serializers
from Todo import models

# Create your views here.
class ProjectModelViewSet(ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer
