from django.utils.timezone import now
from authnapp.models import ListUser
from django.db import models

# Create your models here.



class Project(models.Model):
    name = models.CharField(max_length=32)
    repo_link = models.URLField(max_length=100, default=None)
    users = models.ForeignKey(ListUser, on_delete=models.CASCADE, default=None)


class Todo(models.Model):
    name = models.OneToOneField(Project, on_delete=models.CASCADE)
    note_text = models.TextField()
    creation_date = models.DateField(default=now)
    update_date = models.DateField(default=now)
    user = models.ForeignKey(ListUser, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=False)

    
    