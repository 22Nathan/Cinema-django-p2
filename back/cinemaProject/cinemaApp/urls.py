from django.urls import path
from .views import *
from rest_framework.authtoken import views

urlpatterns = [
    path('token/'          , views.obtain_auth_token),
    path('register/'           , inscription        ),
    path('user/'               , getUserByEmailMdp  ),
    path('films'               , getAllFilms        ),
    path('film/<int:id>/'      , getFilmById        ),
    path('seances'             , getAllSeances      ),
    path('salles'              , getAllSalles       ),
    path('film/infos/<int:id>' , getInfosByFilmId   ),
]
