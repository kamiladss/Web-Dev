from rest_framework import serializers
from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    categoryId = serializers.IntegerField(source='category.id')  
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'image', 'rating',
            'comments_number', 'likes', 'href', 'categoryId'
        ]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']
