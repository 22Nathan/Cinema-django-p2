from django.db import models

class Utilisateur(models.Model):
    ID_utilisateur = models.IntegerField()
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    email = models.EmailField()
    mdp = models.CharField(max_length=20)

class Film(models.Model):
    ID_film = models.IntegerField()
    titre = models.CharField(max_length=100)
    resume = models.CharField(max_length=500)
    duree = models.IntegerField()
    estSpecial = models.BooleanField()
    image = models.URLField(default="https://dummyimage.com/600x400/000/fff")

class Salle(models.Model):
    ID_salle = models.IntegerField()
    nom = models.CharField(max_length=20)
    capacite = models.IntegerField()

class Seance(models.Model):
    ID_seance = models.IntegerField()
    ID_film = models.ForeignKey('Film', on_delete=models.DO_NOTHING)
    ID_salle = models.ForeignKey('Salle', on_delete=models.DO_NOTHING)
    date = models.DateField()
    heure = models.TimeField()
    prix = models.FloatField()
    
    def save(self, *args, **kwargs):
        film = self.ID_film
        self.prix = 20.0 if film.estSpecial else 12.5
        super(Seance, self).save(*args, **kwargs)
