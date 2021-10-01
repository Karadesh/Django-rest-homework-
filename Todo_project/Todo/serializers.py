from django.db.models.fields import CharField
from rest_framework import serializers
from Todo.models import Project, Todo
from authnapp.serializers import ListUserSerializer


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
 #   name = serializers.CharField(max_length=32)
 #   repo_link = serializers.URLField
 #   users = CharField(max_length=32)
    class Meta:
        model = Project
        fields = '__all__'
    
    def create(self, validated_data):
        return super().create(validated_data)

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
    
 #   def create(self, validated_data):
 #       return Project(**validated_data)

#    def update(self, instance, validated_data):
#        instance.name = validated_data.get('name', instance.name)
#        instance.repo_link = validated_data.get('repo_link', instance.repo_link)
#        instance.users = validated_data.get('users', instance.users)
#        return instance
    
class TodoSerializer(serializers.HyperlinkedModelSerializer):
 #   note_project = ProjectSerializer()
    is_active = serializers.BooleanField

    class Meta:
       model = Todo
       fields = '__all__'
       
