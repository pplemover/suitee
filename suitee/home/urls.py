from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views

app_name = 'home'
urlpatterns = [
    # home page
    path('', views.home, name='home'),
    path('homelogin/', views.homelogin, name='homelogin'),
    path('accounts/', include('allauth.urls')),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]

