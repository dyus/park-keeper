"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
import djutils.views.rest_auth

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('parkkeeper.urls')),

    url(r'^api/auth/login/$', djutils.views.rest_auth.login),
    url(r'^api/auth/logout/$', djutils.views.rest_auth.logout),
    url(r'^api/auth/current_user/$', djutils.views.rest_auth.get_current_user),
]

urlpatterns += static('styles', document_root=settings.BASE_DIR + '/../frontend/styles')
urlpatterns += static('dist', document_root=settings.BASE_DIR + '/../frontend/dist')
urlpatterns += static('bower_components', document_root=settings.BASE_DIR + '/../frontend/bower_components')
