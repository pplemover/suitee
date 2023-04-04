from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    # home page
    path('', views.index, name='index'),
]

