# Generated by Django 3.2.9 on 2021-11-03 03:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='cover_pic',
            field=models.FileField(default='default/download.png', upload_to='cat_pics'),
        ),
    ]
