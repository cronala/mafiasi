# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-11 19:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jabber', '0002_auto_20150515_0237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jabberuser',
            name='password',
            field=models.TextField(default=b'NO_PASSWORDS_IN_DB_ZYYJN53N3M5QMHNQKLOAQD7E'),
        ),
    ]
