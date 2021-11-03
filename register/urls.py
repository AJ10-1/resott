from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name="index"),
    path("reg",views.register, name="reg"),
    path("addser",views.addser,name="addser"),
    path("login",views.login, name="login"),
    path("logout",views.logout, name="logout"),
    path("profile",views.profile, name="profile"),
    path("update_profile",views.update_profile, name="update_profile"),
    path("userreg",views.userreg, name="userreg"),
]
