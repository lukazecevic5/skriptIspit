# Generated by Django 3.1.6 on 2021-02-17 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_delete_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='majice',
            name='cena',
            field=models.TextField(),
        ),
    ]
