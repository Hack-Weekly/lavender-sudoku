# Generated by Django 4.2.3 on 2023-08-16 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_game_tries_left_alter_game_board_alter_game_level_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default='2023-08-16 12:45'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='game',
            name='finished_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
