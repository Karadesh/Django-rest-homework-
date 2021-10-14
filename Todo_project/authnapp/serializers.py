from django.forms import fields
from rest_framework.serializers import HyperlinkedModelSerializer
from .models import ListUser


class ListUserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ListUser
        fields = ('username', 'first_name', 'last_name', 'email')


class ListUserSerializerNextVersion(HyperlinkedModelSerializer):
    class Meta:
        model = ListUser
        fields = ['username', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser']