from rest_framework import viewsets
from authnapp.models import ListUser
from django.shortcuts import render
#from rest_framework.viewsets import ModelViewSet
from .serializers import ListUserSerializer
from Todo_project.filters import ViewsoffsetPagination
from rest_framework import mixins

# Create your views here.


class ListUserModelViewSet(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = ListUser.objects.all()
    serializer_class = ListUserSerializer
    pagination_class = ViewsoffsetPagination