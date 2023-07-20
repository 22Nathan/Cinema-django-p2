from django.contrib import admin
from .models import *

admin.site.register(Utilisateur)
admin.site.register(Film)
admin.site.register(Seance)
admin.site.register(Salle)
admin.site.register(Siege)