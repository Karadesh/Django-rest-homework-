# Generated by Django 3.2.7 on 2021-09-27 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Todo', '0009_alter_project_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(max_length=32, unique=True),
        ),
    ]