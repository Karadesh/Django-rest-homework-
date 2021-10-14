from rest_framework import viewsets
from authnapp.models import ListUser
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import ListUserSerializer, ListUserSerializerNextVersion
#from Todo_project.filters import ViewsoffsetPagination
from rest_framework import mixins

# Create your views here.


class ListUserModelViewSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = ListUser.objects.all()
    serializer_class = ListUserSerializer
    #pagination_class = ViewsoffsetPagination

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return ListUserSerializerNextVersion
        return ListUserSerializer