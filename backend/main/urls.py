from django.urls import path
from .views import shooting_location, movie_search, index, set_lat_lng

urlpatterns = [
    path('', index),
    path('location/<str:title>', shooting_location),
    path('search', movie_search),
    path('set_lat_lng', set_lat_lng, name="set_lat_lng")
]