from django.urls import path
from .views import *

urlpatterns = [
    path('register/' , inscription      ),
    path('user/'     , getUserByEmailMdp),
    path('films'     , getAllFilms      ),
    path('seances'   , getAllSeances    ),
    path('salles'    , getAllSalles     ),
]
