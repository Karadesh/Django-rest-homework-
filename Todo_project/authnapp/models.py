from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class ListUser(AbstractUser):
    email = models.EmailField(('email address'), blank=True, unique=True)
