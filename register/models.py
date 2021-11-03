
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    contact_no=models.BigIntegerField(null=True)
    updated_on=models.DateTimeField(auto_now=True)
    profile_pic=models.ImageField(upload_to="media", default="media/default/user.jpg")
    aadhar_id=models.BigIntegerField(default=0)
    gst=models.CharField(max_length=12,null=True)
    regbus=models.CharField(max_length=25)
    otp = models.CharField(max_length=6,blank=True)
    def __str__(self):
        return self.user.username
class  Category(models.Model):
    cat_name = models.CharField(max_length=250)
    cover_pic = models.FileField(upload_to="cat_pics",default="default/download.png")
    description = models.TextField()
    added_on =models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.cat_name

class  Ser(models.Model):
    name_of_dish=models.CharField(max_length=50)
    service_provider=models.ForeignKey(User, on_delete=models.CASCADE)
    desc=models.TextField()
    cate=models.ForeignKey(Category, on_delete=models.CASCADE)
    price=models.IntegerField()
    image=models.ImageField(upload_to="pics",default="default/no.jpg")