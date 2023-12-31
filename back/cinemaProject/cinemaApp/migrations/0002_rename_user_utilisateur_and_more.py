# Generated by Django 4.2.3 on 2023-07-19 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cinemaApp", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="User",
            new_name="Utilisateur",
        ),
        migrations.RenameField(
            model_name="utilisateur",
            old_name="ID_user",
            new_name="ID_utilisateur",
        ),
        migrations.AddField(
            model_name="film",
            name="image",
            field=models.URLField(default="https://dummyimage.com/600x400/000/fff"),
        ),
    ]
