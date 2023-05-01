//===========SCROLL TO TOP BUTTON
const myButton = document.getElementById("myBtn");

//cand dau scroll mai mult de 50 px, apare butonul
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        myButton.classList.remove("btnNone");
        myButton.classList.add("myBtn");
        myButton.classList.remove("disparitieBtn");
    } else {
        myButton.classList.remove("myBtn");
        myButton.classList.add("disparitieBtn");
    }
}; 

//cand dau click pe buton ma aduce la inceput
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0 //for Chrome, Firefox, IE and Opera
};


//==========POSITION FIXED FOR HEADER
window.onload = function(){
    const nav = document.getElementById("nav");
    const myPopup = document.getElementById("myPopup"); 
};
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY
    if(scrollPos > 50){
        //contactHeader.style.display = "none";
        nav.style.position = "fixed";
        myPopup.style.position = "fixed";
        myPopup.style.top = "100px";
        nav.style.top = "0px"
    } else {
        //contactHeader.style.display = "block";
        nav.style.position = "static";
        myPopup.style.position = "absolute";
        myPopup.style.top = "150px";
    }
});


//=============CLICK EVENT FOR SOCIAL MEDIA (FOOTER)
function homebtn(){
    window.location.href = ("./indexHome.html");
};
function mailaddress(){
    window.open("https://e.mail.ru/compose/");
};
function facebook(){
    window.open("https://www.facebook.com/dumitrita.tomac");
};
function instagram(){
    window.open("https://www.instagram.com/e_y_ebrows/");
};
function whatsapp(){
    alert("Open the mobile application and find us at the number: (+40 790 481 664)");
};
function telegram(){
    window.open("https://t.me/+Y0CqkW7QNcpmNDVk");
}


//=============HOVER IN JAVASCRIPT FOR SERVICES *BLOKS (SERVICES) 
const divServices = document.getElementsByClassName("blocC2");
const cos_fav = document.getElementsByClassName("cos_fav");
        
for(let i = 0; i < cos_fav.length; i++){
    cos_fav[i].classList.add("cos_favScript");
};

for(let i = 0; i < divServices.length; i++){
    divServices[i].onmouseenter = function() {
        cos_fav[i].classList.remove("cos_favScript");
    };
    divServices[i].onmouseleave = function() {
        cos_fav[i].classList.add("cos_favScript");
    };
};


/*
//==========CAROUSEL FOR PRODUCTS
let slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(m) {
  showSlides(slideIndex = m);
  console.log("clicked")
};
function showSlides(m) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (m > slides.length) {slideIndex = 1}
  if (m < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};
*/


//==========CAROUSEL FOR PRODUCTS
let indexSlide = 1;
showSlides(indexSlide);


// Thumbnail image controls
function slideCurent(m) {
  showSlides(indexSlide = m);
  console.log("clicked")
};
function showSlides(m) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (m > slides.length) {indexSlide = 1}
  if (m < 1) {indexSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[indexSlide-1].style.display = "block";
  dots[indexSlide-1].className += " active";
};



//=============SHOPPING CART
//Functie pentru aparitia si disparitia ferestrei cu cumparaturi
window.onload = function(){
    const heart = document.getElementById("heart");
    let myPopup = document.getElementById("myPopup"); 
    const summaryOrder = document.getElementById("summaryOrder");
     
    myPopup.classList.add("hidePopup")
    heart.onclick = function(){
        myPopup.classList.toggle("hidePopup");
    }
};

            
//Indentificarea elementului care este apasat
let titleBox = document.getElementsByClassName("title_serv"); //salvez doar tag-urile <p></p> ce contin denumirea
let titleBoxPret = document.getElementsByClassName("pret_serv");
let icon = document.getElementsByClassName("heartt");
let iconfav = document.getElementsByClassName("hearttfav")
document.getElementById("div_blocuri").addEventListener("click", (event) => {

    let li = document.createElement("li"); //creez elementul li
    let inputValue = event.target.dataset["id"]; //identific butonul apasat de pe fiecare bloc 
    for(let i = 0; i < titleBox.length; i++){ //trec prin toate elementele "p"
        if(titleBox[i].classList.contains(inputValue) && titleBoxPret[i].classList.contains(inputValue)){ //daca elementul p contine clasa ( dataset-id )
            let continut = document.createTextNode(titleBox[i].textContent); //salvez continutul din tag-urile "p"
            let continutPret = document.createTextNode("  " + "[" + titleBoxPret[i].textContent + "]");
            li.appendChild(continut); //atribui continutul la elementul li
            li.appendChild(continutPret); //atribui continutul la elementul li
            const myPopup = document.getElementById("myPopup")
            myPopup.appendChild(li); //atribui elementul li la fereastra de cumparaturi
            
            //Adaugarea buton close la fiecare element din lista
            let span = document.createElement("span");
            let txt = document.createTextNode("x");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

            //Operatie de stergere a elementului
            let close = document.getElementsByClassName("close");
            for(let i = 0; i < close.length; i++){
                close[i].onclick = function(){
                    let div = this.parentElement;
                    div.style.display = "none";
                    //sterge -1 din notificari
                    let notify = document.getElementById("badge1")
                    let add = Number(notify.getAttribute("data-count") || 0);
                    notify.setAttribute("data-count", add - 1);
                };
            };

            //Notification number
            let notify = document.getElementById("badge1")
            let add = Number(notify.getAttribute("data-count") || 0);
            notify.setAttribute("data-count", add + 1);
            if(add === 0) {
                notify.classList.add("addNumber");
            }
            false;        
        }; 
    };
});

/*Sters vizual item din lista --> checked */
var list = document.querySelector('ul')
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked")
    }
}, false)



//Scrolling content (marquee effect)
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


//MENU MOBILE
/* Open when someone clicks on the span element */
let cardsS = document.getElementsByClassName("cardS");
let elementM1 = document.getElementsByClassName("minus1menu")
for(let i = 0; i < elementM1.length; i++){
    elementM1[i].style.zIndex = "1";
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("nav").style.zIndex = "1";
    for(let i = 0; i < cardsS.length; i++){
        cardsS[i].style.zIndex = "0";
    }
    for(let i = 0; i < elementM1.length; i++){
        elementM1[i].style.zIndex = "0";
    }
    document.getElementById("myBtn").style.zIndex = "1"
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    for(let i = 0; i < elementM1.length; i++){
        elementM1[i].style.zIndex = "1";
    }
    document.getElementById("nav").style.zIndex = "2";
}
function disparitie(){
    document.getElementById("myNav").style.width = "0%";
    for(let i = 0; i < elementM1.length; i++){
        elementM1[i].style.zIndex = "1";
    }
    document.getElementById("nav").style.zIndex = "2";
}


//BTN FARMASI
const btnFarmasi = document.getElementById("farmasi");
btnFarmasi.onclick = function(){
    window.open("https://www.farmasi.ro/tomacdimitria/regis?fbclid=PAAaZTQipx-DbIx8GFgrrKbwhQQ0yo7AneIZDCp67-OAHLvqwCHk4u3cIg8dw");
}

const btnBlog = document.getElementById("instaBlog");
btnBlog.onclick = function(){
    window.open("https://www.instagram.com/tomacdt/");
}





















