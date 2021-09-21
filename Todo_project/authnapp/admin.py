from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import ListUser

# Register your models here.

class ListUserAdmin(UserAdmin):
    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': ('username', 'password1', 'password2'),
            },
        ),
    )

admin.site.register(ListUser, ListUserAdmin)
    