# Generated by Django 4.2.3 on 2023-08-16 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_game_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='created_at',
            field=models.FloatField(default=1692199733.001862),
        ),
    ]
