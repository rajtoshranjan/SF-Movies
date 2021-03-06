# SF Movies

SF Movies is a full stack web application which shows the shooting location of a movie in San Francisco.
I used data from <a target="_blank" href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am">DataSF: Film Locations.</a>

#### this application Includes

- A Google Map.
- A auto completion text search for movie tilte.
- Shows information (Such as: Director Name, Writer Name, Actors etc) of searched movie.
- Shows markers on the map of different shooting locations of searched movie.
- Shows movie name, location and a funfact about that location (related to movie) when you click on the marker.

## Problem Statement

Create a service that shows on a map where movies have been filmed in San
Francisco. The user should be able to filter the view using autocompletion
search.
The data is available on <a target="_blank" href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am">DataSF: Film Locations.</a>

## Technology Used

#### For Backend

- Django Web Framework :
  I used Django because of its ORM(Object Relational Mapper) and build in admin ui.
- Python Programming Language
- Django Rest Framework :
  It makes serialization(converting querysets to Dict or JSON) very easy.
- SQLite3 Database :
  Light weight, Server less database

#### For Frontend

- React Js :
  Fast, Scalable, and Simple JavaScript Library
- react-google-maps library :
  library for display map and marker in react js application
- Java Script
- HTML5
- CSS

## Access the Application

- <a target="_blank" href="https://sfmovies.pythonanywhere.com/">Backend</a>
- <a target="_blank" href="https://sfmovies2.web.app/">Fronend</a>
- <a target="_blank" href="https://www.linkedin.com/in/rajtosh-ranjan-335ab1179/">My LinkedIn Profile</a>

## What i can do in future updates

When i shated working on this project Google Maps Api comes in mind for showing map, but google wants a billing account for the production api thats why i used development api in this project. In future i will replace the google map with openstreet map(A free to use map).
And also i will improve the Design of the website
