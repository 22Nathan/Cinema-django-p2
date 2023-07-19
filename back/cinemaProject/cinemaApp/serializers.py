from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = "__all__"

    # class Meta:
    #     model = Utilisateur
    #     fields = ['email', 'mdp']

    #     def create(self, data):
    #         user = User.objects.create(user)
    #         user.set_password(data['password'])
    #         user.save()
    #         return user

class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = "__all__"

class SalleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salle
        fields = "__all__"

class SeanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seance
        fields = "__all__"