# Generated by Django 3.2.7 on 2021-09-28 22:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Todo', '0013_alter_project_users'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(max_length=32),
        ),
    ]