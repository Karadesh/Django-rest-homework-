# Generated by Django 3.2.7 on 2021-09-27 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Todo', '0008_alter_todo_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(max_length=32),
        ),
    ]