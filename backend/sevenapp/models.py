from django.db import models

class User(models.Model):
    
    user_id = models.CharField(max_length=150, blank=False, unique=True)
    name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique = True)
    _password = models.CharField(max_length = 254)