from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .serializers import *
from .models import *
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# --------------------------------------------------------------------------------


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def inscription(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username= serializer.data['username'])
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'status':200,'données': serializer.data, 'token': str(token)})
    return Response({'status': 403, 'errors': serializer.errors})


@api_view(['POST'])
def getUserByEmailMdp(request):
    try:
        user = Utilisateur.objects.get(
            email=request.data.get('email'), 
            mdp=request.data.get('mdp')
        ) 
    except Utilisateur.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    serializers = UserSerializer(user)
    return Response(serializers.data)

@api_view(['GET'])
def getAllFilms(request):
    films = Film.objects.all() 
    serializers = FilmSerializer(films, many=True)
    return Response(serializers.data)

@api_view(['GET'])
def getAllSeances(request):
    seances = Seance.objects.all() 
    serializers = SeanceSerializer(seances, many=True)
    return Response(serializers.data)

@api_view(['GET'])
def getAllSalles(request):
    salles = Salle.objects.all() 
    serializers = SalleSerializer(salles, many=True)
    return Response(serializers.data)