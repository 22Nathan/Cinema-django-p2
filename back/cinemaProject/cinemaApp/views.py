from django.shortcuts import render
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from rest_framework import status

# Create your views here.

# --------------------------------------------------------------------------------
@api_view(['GET'])
def getInfos(request):
    info = {'nom': 'test', 'prenom': 'testname'}
    return Response(info)