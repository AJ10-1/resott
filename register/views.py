from register.models import Profile
from django.shortcuts import redirect, render,get_object_or_404
from django.contrib.auth.models import User, auth
from django.contrib import messages
from . models import Category, Ser 
# Create your views here.
def index(request):
    cat=Category.objects.all().order_by("cat_name")
    return render(request,"index.html", {"categ":cat})

def addser(request):
    aser=Profile.objects.filter(user__id=request.user.id)
    ase=Category.objects.all().order_by("cat_name")
    if request.method=="POST":
        
        name_of_dish=request.POST["ser_name"]
        c=request.POST["categ"]
        price=request.POST["price"]
        description=request.POST["desc"]
        
        category=get_object_or_404(Category, id=c)
        service_provider= get_object_or_404(User, id=request.user.id)
        ap=Ser(name_of_dish=name_of_dish,service_provider=service_provider,cate=category,price=price,desc=description)
        ap.save()
        if "ser_img" in request.FILES:
            imgs=request.file["ser_img"]
            ap.image=imgs
            ap.save()

    return render(request, "addservice.html",{"ase":ase})
def register(request):
    if(request.method == "POST"):
        first_name = request.POST['first_name']
        last_name = request.POST['lname']
        email = request.POST['email']
        user_name = request.POST['user_name']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        con = request.POST["con"]
        gst=request.POST["gst"]
        regbus=request.POST["regib"]
        if (password == confirm_password):
            if User.objects.filter(username=user_name).exists():
                messages.info(request, "Oops! Username already taken.")
                return redirect("about")
            else:
                user = User.objects.create_user(
                    username=user_name, first_name=first_name, last_name=last_name, email=email, password=password)
                if "staff" in request.POST:

                    user.is_staff=True
                    user.save()
                user2 = Profile(user=user, contact_no=con, gst=gst, regbus=regbus)
                user2.save()
                messages.info(request, "Congrates you are in..")
                return redirect('login')
    return render(request, "staffreg.html")

def userreg(request):
    if(request.method == "POST"):
        first_name = request.POST['first_name']
        last_name = request.POST['lname']
        email = request.POST['email']
        user_name = request.POST['user_name']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        con = request.POST["con"]

        if (password == confirm_password):
            if User.objects.filter(username=user_name).exists():
                messages.info(request, "Oops! Username already taken.")
                return redirect("userreg")
            else:
                user = User.objects.create_user(username=user_name, first_name=first_name, last_name=last_name, email=email, password=password)
                user.save()
                user2 = Profile(user=user, contact_no=con)
                user2.save()
                messages.info(request, "Congrates you are in..")
            return redirect('login')
    return render(request, "register.html")

def login(request):
    if(request.method == "POST"):
        usrname = request.POST["usrname"]
        password = request.POST["password"]
        logger = auth.authenticate(username=usrname, password=password)
        if logger != None:
            auth.login(request, logger)
            return redirect("index")
        else:
            return redirect("login")
    else:
        return render(request, "login.html")

def logout(request):
    auth.logout(request)
    return redirect("index")

def profile(request):
    display = {}
    prof = Profile.objects.filter(user_id=request.user.id)
    if len(prof) > 0:
        dis = Profile.objects.get(user_id=request.user.id)
        display["dis"] = dis
        
    tour = Ser.objects.filter(service_provider=request.user.id).order_by("id")
    display["tour"] = tour
    return render(request, "profile.html", display)

def update_profile(request):
    display = {}
    prof = Profile.objects.filter(user_id=request.user.id)
    if len(prof) > 0:
        dis = Profile.objects.get(user_id=request.user.id)
        display["dis"] = dis

        if request.method == "POST":
            fname = request.POST['fname']
            lname = request.POST['lname']
            email = request.POST['email']
            uname = request.POST['uname']
            phn = request.POST['phn']
            aadhar = request.POST['aadhar']

            user = User.objects.get(id=request.user.id)
            user.username = uname
            user.first_name = fname
            user.last_name = lname
            user.email = email

            user.save()
            dis.aadhar_id = aadhar
            dis.contact_no = phn

            dis.save()
            if "img" in request.FILES:
                pic = request.FILES["img"]
                dis.profile_pic = pic
                dis.save()

            display["s"] = "changesave"
            return redirect("profile")

    return render(request, "update_pro.html", display)