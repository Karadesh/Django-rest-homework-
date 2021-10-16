import graphene
from graphene_django import DjangoObjectType
from authnapp.models import ListUser
from Todo.models import Project, Todo


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = ListUser
        fields = '__all__'


class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)
    all_todos = graphene.List(TodoType)
    
    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_users(root, info):
        return ListUser.objects.all()

    def resolve_all_todos(root, info):
        return Todo.objects.all()


schema = graphene.Schema(query=Query)