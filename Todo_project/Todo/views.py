from django.http import request
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from Todo import serializers
from Todo import models
#from Todo_project.filters import ViewsoffsetPagination
from rest_framework import mixins


# Create your views here.
class ProjectModelViewSet(ModelViewSet, mixins.DestroyModelMixin):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer
#    pagination_class = ViewsoffsetPagination
#    pagination_class.default_limit = 10

#    def get_queryset(self):
#        return models.Project.objects.filter(name__contains= models.Project.name)


class TodoModelViewSet(mixins.DestroyModelMixin,mixins.CreateModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer
 #   pagination_class = ViewsoffsetPagination
 #   pagination_class.default_limit = 20
    
    def perform_destroy(self, instance=False):
        instance.is_active ='is_active', instance.is_active 
        return instance        

    
        

