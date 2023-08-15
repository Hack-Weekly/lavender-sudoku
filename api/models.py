from django.db import models
from django.contrib.auth.models import AbstractUser

#import slugify
from django.utils.text import slugify

class User(AbstractUser):
      '''
      Basic User model with email as username
      '''
      description = models.TextField()

      def __str__(self):
          return self.username