from django.db import models

class Patike(models.Model):
    marka = models.TextField()
    model = models.TextField()
    cena = models.TextField()

    def __str__(self):
        return self.marka + ': ' + self.model

class Majice(models.Model):
    marka = models.TextField()
    cena = models.TextField()

    def __str__(self):
        return self.marka


