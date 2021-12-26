from django.shortcuts import redirect
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ShootingLocationSerializer, MovieSerializer
from .models import ShootingLocation, Movie

import requests
import urllib.parse

def get_lat_long(location):
    url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(location+" San Francisco") +'?format=json'
    response = requests.get(url).json()
    if response:
        return float(response[0]["lat"]), float(response[0]["lon"])
    return False

def set_lat_lng(request):
    locations = ShootingLocation.objects.all()
    for location in locations:
        if location.lat != None and location.lng != None:
            continue
        latlng = get_lat_long(location.location)
        if latlng:
            location.lat = latlng[0]
            location.lng = latlng[1]
            location.save()
    return redirect('/admin')

def index(request):
    return HttpResponse("""
        <div style="display: grid; align-items: center; justify-content: center; height:90vh">
            <h1 style="font-family: Consolas; color:brown">Welcome to SF Movies Shooting Location API</h1>
        </div>
        """)

@api_view(["GET"])
def movie_search(request):
    if request.method == "GET":
        movie_str = request.GET.get('movie')
        movies = Movie.objects.filter(title__icontains=movie_str)
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def shooting_location(request, title):
    try:
        movie = Movie.objects.get(title=title)
    except Movie.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ShootingLocationSerializer(ShootingLocation.objects.filter(movie=movie), many=True)
        return Response(serializer.data)