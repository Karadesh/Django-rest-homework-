import json
from typing import List
from django.http import request, response
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from authnapp.views import ListUserModelViewSet
from Todo.views import ProjectModelViewSet, TodoModelViewSet
from authnapp import models
from Todo import models


class TestListUserModelViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/ListUsers')
        view = ListUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_createProject(self):
        factory = APIRequestFactory()
        request = factory.post('/api/Project/', {'name': 'TestProject321', 'repo_link': 'http://168.255.255.3', 'Users': 2}, format='json')
        view = ProjectModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


    def test_get_user_detail(self):
        user = mixer.blend(models.ListUser)
        client = APIClient()
        response = client.get(f'/api/ListUsers/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/Project/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)



