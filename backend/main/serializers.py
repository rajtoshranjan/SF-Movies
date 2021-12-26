from rest_framework import serializers
from .models import ShootingLocation, Movie, Actor

class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'title')

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ('__all__')

class ShootingLocationSerializer(serializers.ModelSerializer):
    movie = serializers.CharField(source='movie.title')
    release_year = serializers.CharField(source='movie.release_year')
    production = serializers.CharField(source='movie.production.name')
    distributor = serializers.CharField(source='movie.distributor.name')
    director = serializers.CharField(source='movie.director.name')
    writer = serializers.CharField(source='movie.writer.name')
    actors = ActorSerializer(many=True, read_only=True, source="movie.actor.all")

    class Meta:
        model = ShootingLocation
        fields = ('__all__')