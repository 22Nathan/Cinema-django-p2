from django.urls import path
from .views import *

urlpatterns = [
    path('register/'       , inscription      ),
    path('user/'           , getUserByEmailMdp),
    path('films'           , getAllFilms      ),
    path('film/<int:id>/'  , getFilmById      ),
    path('seances'         , getAllSeances    ),
    path('salles'          , getAllSalles     ),
]
