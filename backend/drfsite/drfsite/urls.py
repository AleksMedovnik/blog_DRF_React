from django.contrib import admin
from django.urls import path, include, re_path
from service.views import *
from rest_framework import routers

router_cat = routers.SimpleRouter()
router_cat.register(r'cats', CatViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('rest_framework.urls')),
    path('api/v1/postlist/', PostAPIList.as_view()),
    path('api/v1/postlist/<int:pk>/', PostAPIUpdate.as_view()),
    path('api/v1/postdestroy/<int:pk>/', PostAPIDestroy.as_view()),
    path('api/v1/', include(router_cat.urls)),
    path('api/v1/auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]
