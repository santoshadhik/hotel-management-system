# Generated by Django 4.1.4 on 2024-05-19 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0002_rename_hotel_description_room_room_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='room_img',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
