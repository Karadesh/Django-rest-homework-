from rest_framework.serializers import HyperlinkedModelSerializer
from .models import ListUser


class ListUserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ListUser
        fields = ['username', 'first_name', 'last_name', 'email']