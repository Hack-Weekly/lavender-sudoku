#update user level when ever score is changed
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from api.models import Game 
User=get_user_model()

@receiver(post_save,sender=Game)
def update_user_level(sender,request,instance,**kwargs):
    user=request.user
    user.update_level()
    user.save()
