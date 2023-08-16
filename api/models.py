from typing import Iterable, Optional
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify
#import projec
from django.contrib.postgres.fields import ArrayField
import json
import time
from django.core.validators import MaxValueValidator, MinValueValidator

class User(AbstractUser):
    
    bio=models.TextField(default="I love numbers.")
    level=models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(10)])
    score=models.FloatField(default=0)

    def update_level(self):
        """
        This function is used to update the level of the user
        """
        if self.level<10:
            self.level=self.score//1000
            if self.level>10:
                self.level=10
            self.save()

    def __str__(self):
        return self.username
    
class Game(models.Model):
    """
    This model is used to store the game state of a user.
    """

    user=models.ForeignKey(User,on_delete=models.CASCADE)
    level=models.IntegerField(default=1)
    board = models.TextField(blank=True,null=True)
    solution=models.TextField(blank=True,null=True)
    user_solution=models.TextField(blank=True,null=True)
    tries_left=models.IntegerField()
    created_at=models.FloatField(default=time.time())
    finished_at=models.FloatField(blank=True,null=True)

    @property
    def playing_board(self):
        return json.loads(self.board)
    
    @property
    def playing_board_solution(self):
        return json.loads(self.solution)
    
    def get_user_solution(self):
        return json.loads(self.user_solution)
    
    @playing_board.setter
    def playing_board(self,board):
        self.board=json.dumps(board)

    @playing_board_solution.setter
    def playing_board_solution(self,solution):
        self.solution=json.dumps(solution)
    
    
    def set_user_solution(self,user_solution):
        self.user_solution=json.dumps(user_solution)

    def solved(self):
        return self.solution==self.user_solution
    

    @property
    def finishing_time(self):
        #return finshed time in seconds
        #will be used to calculate score
        finish_seconds=self.finished_at-self.created_at
        if finish_seconds<=3600:
            return finish_seconds
        return 1
    
    def score(self):
        if self.solved():
            return self.level*10+int(self.finishing_time)/10 + self.tries_left *1.5

    def __str__(self):
        return self.user.username+" "+str(self.id)
    
    def save(self,*args,**kwargs):
        if self.tries_left is None:
            self.tries_left=25-(self.level*2)
        super().save(*args,**kwargs)

