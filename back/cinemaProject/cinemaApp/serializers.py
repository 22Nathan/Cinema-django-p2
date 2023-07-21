from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

        def create(self, data):
            # user = User.objects.create(data['username'])
            # user.set_password(data['password'])
            # user.save()
            # return user

            # data['password'] = make_password(data['password'])
            # user = super(UserSerializerCreate, self).create(validated_data)
            # user = User.objects.create_user(data)
            # user.save()

            user = User.objects.get(username= data['username'])
            user.password = make_password(data['password'])
            user.save()
            return user

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = "__all__"

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