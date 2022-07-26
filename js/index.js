

/* Hamburger to X Animation */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});

document.querySelectorAll(".navMenu", "li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}));

/* Skill Section on the About Page */
$(".skillText").click(function(){
    $(this).find(".skillList_grid").toggleClass("skill-active");
    $(this).siblings(".skillTitle").find(".skillList_grid").removeClass("skill-active");
    if ($(".skillList_grid").hasClass("skill-active")) {
        $(".plusIcon").removeClass("fa-plus").addClass("fa-minus");
    }
    else {
        $(".plusIcon").removeClass("fa-minus").addClass("fa-plus");
        }
});

$(".appText").click(function(){
    $(this).find(".appList_grid").toggleClass("app-active");
    $(this).siblings(".appTitle").find(".appList_grid").removeClass("app-active");
    if ($(".appList_grid").hasClass("app-active")) {
        $(".app-plusIcon").removeClass("fa-plus").addClass("fa-minus");
    }
    else {
        $(".app-plusIcon").removeClass("fa-minus").addClass("fa-plus");
        }
});

$(".intText").click(function(){
    $(this).find(".intList_grid").toggleClass("int-active");
    $(this).siblings(".intTitle").find(".intList_grid").removeClass("int-active");
    if ($(".intList_grid").hasClass("int-active")) {
        $(".int-plusIcon").removeClass("fa-plus").addClass("fa-minus");
    }
    else {
        $(".int-plusIcon").removeClass("fa-minus").addClass("fa-plus");
        }
});

/* Active Page */
document.querySelectorAll('.navLink').forEach(link => {
    if(link.href === window.location.href) {
     link.setAttribute('aria-current', 'page')
    }
 })

/* Scroll To Reveal Section Titles */
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    var slides = document.querySelectorAll('.slideLeft');
    var slid = document.querySelectorAll('.slideRight');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('tada');
        }
        else{
            reveals[i].classList.remove('tada');
        }
    }

    for(var i = 0; i < slides.length; i++){

        var windowheight = window.innerHeight;
        var slidetop = slides[i].getBoundingClientRect().top;
        var slidepoint = 0;

        if(slidetop < windowheight - slidepoint){
            slides[i].classList.add('sLeft');
        }
        else{
            slides[i].classList.remove('sLeft');
        }
    }

        for(var i = 0; i < slid.length; i++){

        var windowheight = window.innerHeight;
        var slidtop = slid[i].getBoundingClientRect().top;
        var slidpoint = 0;

        if(slidtop < windowheight - slidpoint){
            slid[i].classList.add('sRight');
        }
        else{
            slid[i].classList.remove('sRight');
        }
    }
}

var modal = document.getElementById("affinityModal");

var img = document.getElementById("affinityImg");
var modalImg = document.getElementById("affImg");
var captionText = document.getElementById("imgCap");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("adclose")[0];

span.onclick = function() {
    modal.style.display = "none";
  }

var ufmodal = document.getElementById("uflowModal");

var ufimg = document.getElementById("ufImg");
var ufmodalImg = document.getElementById("uflowImg");
var ufcaptionText = document.getElementById("ufimgCap");
ufimg.onclick = function(){
  ufmodal.style.display = "block";
  ufmodalImg.src = this.src;
  ufcaptionText.innerHTML = this.alt;
}

var ufspan = document.getElementsByClassName("ufclose")[0];

ufspan.onclick = function() {
    ufmodal.style.display = "none";
  }

var Iufmodal = document.getElementById("IuflowModal");

var Iufimg = document.getElementById("IufImg");
var IufmodalImg = document.getElementById("IuflowImg");
var IufcaptionText = document.getElementById("IufimgCap");
Iufimg.onclick = function(){
  Iufmodal.style.display = "block";
  IufmodalImg.src = this.src;
  IufcaptionText.innerHTML = this.alt;
}

var Iufspan = document.getElementsByClassName("Iufclose")[0];

Iufspan.onclick = function() {
    Iufmodal.style.display = "none";
  }