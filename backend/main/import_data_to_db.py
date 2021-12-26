import pandas as pd
from .models import *

df = pd.read_csv('Film_Locations_in_San_Francisco.csv')
def add_production():
	items = set(list(df['Production Company']))
	for item in items:
		ProductionCompany.objects.create(name = item)

def add_director():
	items = set(list(df['Director']))
	for item in items:
		Director.objects.create(name = item)

def add_distributor():
	items = set(list(df['Distributor']))
	for item in items:
		Distributor.objects.create(name = item)

def add_writer():
	items = set(list(df['Writer']))
	for item in items:
		Writer.objects.create(name = item)

def add_actor():
	items = set(list(df['Actor 1'])+list(df['Actor 2'])+list(df['Actor 3']))
	for item in items:
		Actor.objects.create(name = item)

def add_movie():
	added = set()
	for i in range(df.shape[0]):
		if df.loc[i, 'Title'] in added:
			continue
		a = Movie(
			title=df.loc[i, 'Title'],
			release_year=df.loc[i, 'Release Year'],
			production = ProductionCompany.objects.filter(name = df.loc[i, 'Production Company']).first(),
			distributor = Distributor.objects.filter(name = df.loc[i, 'Distributor']).first(),
			director = Director.objects.filter(name = df.loc[i, 'Director']).first(),
			writer = Writer.objects.filter(name = df.loc[i, 'Writer']).first(),
			)
		a.save()
		a.actor.add(Actor.objects.filter(name = df.loc[i, 'Actor 1']).first(), Actor.objects.filter(name = df.loc[i, 'Actor 2']).first(), Actor.objects.filter(name = df.loc[i, 'Actor 3']).first())
		a.save()
		added.add(df.loc[i, 'Title'])
		
def add_shooting_location():
	for i in range(df.shape[0]):
		a = ShootingLocation.objects.create(
			movie=Movie.objects.filter(title=df.loc[i, 'Title']).first(),
			location = df.loc[i, 'Locations'],
			fun_fact = df.loc[i, 'Fun Facts'],
			)

def start_inserting():
	print("Starting inserting data in database...")
	print("Inserting production company data...")
	add_production()
	print("Inserting distributor data...")
	add_distributor()
	print("Inserting director data...")
	add_director()
	print("Inserting writer data...")
	add_writer()
	print("Inserting actor data...")
	add_actor()
	print("Inserting movie Data...")
	add_movie()
	print("Inserting shooting location...")
	add_shooting_location()
	print("Insertion Compleated!")