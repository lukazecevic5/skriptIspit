from django.db import models

class Patike(models.Model):
    marka = models.TextField()
    model = models.TextField()

    def __str__(self):
        return self.marka + ': ' + self.model

class Majice(models.Model):
    marka = models.TextField()

    def __str__(self):
        return self.marka

class User(models.Model):
    mail = models.TextField()
    username = models.TextField()
    password = models.TextField()
    name = models.TextField()
    surname = models.TextField()
    admin = models.IntegerField()

    def __str__(self):
        return self.name + ': ' + self.surname
