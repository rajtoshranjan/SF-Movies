from django.db import models

# Title,Release Year,Locations,Fun Facts,Production Company,Distributor,Director,Writer,Actor 1,Actor 2,Actor 3

class ProductionCompany(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

class Distributor(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

class Director(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

class Actor(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

class Writer(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

class Movie(models.Model):
	title = models.CharField(max_length=100)
	release_year = models.SmallIntegerField()
	production = models.ForeignKey(ProductionCompany, on_delete=models.DO_NOTHING)
	distributor = models.ForeignKey(Distributor, on_delete=models.DO_NOTHING)
	director = models.ForeignKey(Director, on_delete=models.DO_NOTHING)
	writer = models.ForeignKey(Writer, on_delete=models.DO_NOTHING)
	actor = models.ManyToManyField(Actor)

	class Meta:
		ordering = ['-release_year']

	def __str__(self):
		return self.title

class ShootingLocation(models.Model):
	movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
	location = models.CharField(max_length=500)
	fun_fact = models.TextField()
	lat = models.FloatField(null=True, blank=True)
	lng = models.FloatField(null=True, blank=True)
	
	def __str__(self):
		return self.movie.title