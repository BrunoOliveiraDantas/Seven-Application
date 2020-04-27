from django.db import models

class User(models.Model):
    
    user_id = models.AutoField(primary_key=True, unique =True)
    name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique = True)
    password = models.CharField(max_length = 254)