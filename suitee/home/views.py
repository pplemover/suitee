from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect


@login_required
def homelogin(request):
    return render(request, 'home/login.html')
# if a user tries to access the home page without being logged in, they will be redirected to the login page.

def home(request):
    return render(request, 'home/home.html')