from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    img = models.JSONField(default=list)
    rating = models.CharField(max_length=10, default='0')
    comments_number = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    href = models.URLField(blank=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
