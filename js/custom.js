
//ikonice u top headeru
let nizLinkovaDrustvenihMreza = ["fab fa-facebook-f", "fab fa-instagram", "fab fa-youtube", "fab fa-twitter"];
let linkoviDrustvenihMreza = ["https://sr-rs.facebook.com/", "https://www.instagram.com/", "https://www.youtube.com/", "https://www.twitter.com/"];
let divIkonica = document.querySelector(".ikonica");
let ispisIkonica = "";
for(var i = 0; i < nizLinkovaDrustvenihMreza.length; i++){
 ispisIkonica += `<a class="text-body px-2 href="${linkoviDrustvenihMreza[i]}">
                <i class="${nizLinkovaDrustvenihMreza[i]}"></i></a>`;
                
}
divIkonica.innerHTML = ispisIkonica;

//navigacioni meni
let nizLinkText = ["Početna", "O nama", "Usluge", "Kontakt", "Autor"];
let nizLinkHref = ["index.html", "about.html", "usluge.html", "contact.html", "autor.html"];

let divNavMenu = document.querySelector("#navMenu");
let formatZaIspisNavMenu = "";

for(let i = 0; i < nizLinkHref.length; i++){
    formatZaIspisNavMenu += `<a href="${nizLinkHref[i]}" class="nav-item nav-link">${nizLinkText[i]}</a>`;
}
divNavMenu.innerHTML = formatZaIspisNavMenu;

if(document.location.pathname == "/index.html" || document.location.pathname == "/"){

    //forma

    //regularni izrazi
    var reImePrezime = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})+$/;
    var reJMBG = /^[\d]{13}$/;
    var reTelefon = /^(\+381|[0])6[0-79][\d]{6,7}$/;

    var objImePrezime = document.getElementById("imePrezime");
    objImePrezime.addEventListener("blur",function(){
    proveraRegularnihIzraza(reImePrezime, objImePrezime);
    });
    var objJMBG = document.getElementById("jmbg");
    objJMBG.addEventListener("blur", function(){
    proveraRegularnihIzraza(reJMBG, objJMBG);
    });
    var objTelefon = document.getElementById("telefon");
    objTelefon.addEventListener("blur", function(){
    proveraRegularnihIzraza(reTelefon, objTelefon);
    });



    var nizOsoba = document.getElementsByName("osoba");


    var cekiranoPolje = document.getElementById("uslov");
    cekiranoPolje.addEventListener("change",function(){
    if(cekiranoPolje.checked){
        cekiranoPolje.nextElementSibling.classList.remove("prikaziGresku");
        cekiranoPolje.nextElementSibling.classList.add("sakrijGresku");
    }
    else{
        cekiranoPolje.nextElementSibling.classList.remove("sakrijGresku");
        cekiranoPolje.nextElementSibling.classList.add("prikaziGresku");
    }
    })


    var taster = document.getElementById("dugme");
    taster.addEventListener("click", obradaForme);

    function obradaForme(){
    //Radio check
    var greske = 0;
    var j = 1;
    for(let i= 0; i <nizOsoba.length; i++){
        if(nizOsoba[i].checked){
            nizOsoba[1].nextElementSibling.classList.remove("prikaziGresku");
            nizOsoba[1].nextElementSibling.classList.add("sakrijGresku");
            j=0
            break;
        }
        else{
            nizOsoba[1].nextElementSibling.classList.remove("sakrijGresku");
            nizOsoba[1].nextElementSibling.classList.add("prikaziGresku");
            j = 1
        }
    }
    greske += j;
    j=1
    //Check 
    if(cekiranoPolje.checked){
        cekiranoPolje.nextElementSibling.nextElementSibling.classList.remove("prikaziGresku");
        cekiranoPolje.nextElementSibling.nextElementSibling.classList.add("sakrijGresku");
        j=0;
    }
    else{
        cekiranoPolje.nextElementSibling.nextElementSibling.classList.remove("sakrijGresku");
        cekiranoPolje.nextElementSibling.nextElementSibling.classList.add("prikaziGresku");
        j=1;
    }
    greske += j;
    greske += proveraRegularnihIzraza(reImePrezime, objImePrezime);
    greske +=  proveraRegularnihIzraza(reJMBG, objJMBG);
    greske +=  proveraRegularnihIzraza(reTelefon, objTelefon);

    var objLekari = document.getElementById("ddlLekari");
    var lekarVrednost = objLekari.options[objLekari.selectedIndex].value;
    var greskaLista = document.getElementById("gr");

    j = 1;
    if(lekarVrednost == "0"){
        greskaLista.classList.remove("sakrijGresku");
        greskaLista.classList.add("prikaziGresku");
        j = 1;
    }
    else{
        greskaLista.classList.remove("prikaziGresku");
        greskaLista.classList.add("sakrijGresku");
        j = 0;
    }
    greske += j;
    if(!greske){
        taster.nextElementSibling.classList.remove("sakrijUspesno");
        taster.nextElementSibling.classList.add("uspesno");
    }
    else{
        taster.nextElementSibling.classList.remove("uspesno");
        taster.nextElementSibling.classList.add("sakrijUspesno");
    }
    }

    $("#accordionExample").click(function(){
        var isVisible = $(this).find("collapseOne").is(":visible");
    
        if(isVisible){
            $(this).find("accordion-body").hide();
        }else{
            $(this).find("collapseOne").show();
        }
    
    })

}
if(document.location.pathname == "/" || document.location.pathname == "/index.html"|| document.location.pathname == "/about.html"){
    // slider
    slideShow();

    function slideShow(){
        let trenutni = $("#slider .aktivna");

        let sledeci = $(trenutni).next().length ? $(trenutni).next() : $(trenutni).parent().children(':first');

        $(sledeci).addClass("aktivna");
        $(trenutni).removeClass("aktivna");

        setTimeout(slideShow, 1500)
    }
    //dinamic about
    
    var aboutIcon = ["fa fa-3x fa-user-md", "fa fa-3x fa-procedures", "fa fa-3x fa-microscope", "fa fa-3x fa-ambulance "];
    var aboutText = ["Odlični", "Izuzetne", "Testiranje", "Besplatna"];
    var aboutText2 = ["lekari", "sobe", "analiza", "hitna pomoć"];

    var aboutRow = document.getElementById("abRow");
    let ispisOnama = "";
    for (let i = 0; i < aboutIcon.length; i++) {
        ispisOnama += `<div class="col-sm-3 col-6">
        <div class="bg-light text-center rounded-circle py-4">
            <i class="${aboutIcon[i]} text-primary mb-3"></i>
            <h6 class="mb-0">${aboutText[i]}<small class="d-block text-primary">${aboutText2[i]}</small></h6>
        </div></div>`;
    }
    aboutRow.innerHTML = ispisOnama;
}
if(document.location.pathname == "/" || document.location.pathname == "/index.html" || document.location.pathname == "/usluge.html"){
    //usluge
    let ikoniceUsluge = ["fa-solid fa-flask-vial", "fa-solid fa-face-grin", "fa-solid fa-x-ray", "fa-solid fa-stethoscope", "fa-solid fa-baby", "fa-solid fa-eye"];
    let naslovUsluge = ["Laboratorija", "Dermatologija", "Radiologija", "Hirurgija", "Pedijatrija", "Oftalmologija"];
    let tekstUsluge = ["Opremljena laboratorija sa svim mogućim analizama", "Sve kožne probleme možete izlečiti kod nas", "Naša bolnica raspolaže modernim aparatima koji prilikom snimanja koriste veoma niske doze zračenja","Uz hiruško odeljenje pacijentima na raspolaganju su i usluge poluintenzivne i intenzivne nege","U službi pedijatrije Medinova se leče deca od rođenja do uzrasta od 18 godina", "Kod nas možete obaviti sve vrste očnog pregleda"];
    
    let usluge = document.querySelector(".usluge");
    let ispisUsluga = "";

    for(let i = 0; i < naslovUsluge.length; i++){
        ispisUsluga += `<div class="col-lg-4 col-md-6">
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
        <div class="service-icon mb-4">
        <i class="${ikoniceUsluge[i]} text-white"></i>
        </div>
        <h4 class="mb-3">${naslovUsluge[i]}</h4>
        <p class="m-0 mb-2">${tekstUsluge[i]}</p>
        </div></div>`;

    }
    usluge.innerHTML = ispisUsluga;


    //zebra
    var parniTabela01 = $(".table tbody tr:nth-child(even)");
    parniTabela01.css({"backgroundColor": "#13C5DD", "color": "#fff"});
    $(".table tbody tr:nth-child(odd)").css({"backgroundColor": "#1D2A4D", "color": "fff"});
}

if (document.location.pathname == "/contact.html" || document.location.pathname == "/"){
    let ikonicaKontakt = ["fa fa-2x fa-location-arrow", "fa fa-2x fa-phone", "fa fa-2x fa-envelope-open"];
    let tekstKontakt = ["Zdravka Čelara 16", "+381 4785 7812", "medinova@gmail.com"]

    let kontakt = document.querySelector(".kontakt");
    let ispisKontakt = "";
    for(let i = 0; i < ikonicaKontakt.length; i++){
        ispisKontakt += `<div class="col-lg-4">
        <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style="height: 200px;">
            <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style="width: 100px; height: 70px; transform: rotate(-15deg);">
                <i class="${ikonicaKontakt[i]} text-white" style="transform: rotate(15deg);"></i>
            </div>
            <h6 class="mb-0">${tekstKontakt[i]}</h6>
        </div>
        </div>`;
    }
    kontakt.innerHTML = ispisKontakt;

    //forma 2
var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var reIme = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,11}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,11})*$/;
var reNaslov = /(.{3})+/
var rePoruka = /(.{10})+/

var objIme = document.querySelector("#ime");
    objIme.addEventListener("blur",function(){
        proveraRegularnihIzraza(reIme,objIme);
    })
var objEmail = document.querySelector("#imejl");
    objEmail.addEventListener("blur",function(){
        proveraRegularnihIzraza(reEmail,objEmail);
    })    
var objNaslov = document.querySelector("#naslov");
    objNaslov.addEventListener("blur",function(){
        proveraRegularnihIzraza(reNaslov,objNaslov);
    })

    var objPoruka = document.querySelector("#poruka");
    objPoruka.addEventListener("blur",function(){
        proveraRegularnihIzraza(rePoruka,objPoruka);
    })
var dugme = document.getElementById("btn");
dugme.addEventListener("click", kontaktObrada);
function kontaktObrada(){
    var greske = 0;
    greske += proveraRegularnihIzraza(reIme,objIme);
    greske += proveraRegularnihIzraza(reEmail,objEmail);
    greske += proveraRegularnihIzraza(reNaslov,objNaslov);
    greske += proveraRegularnihIzraza(rePoruka,objPoruka);
    
    if(!greske){
        dugme.nextElementSibling.classList.remove("sakrijUspesno");
        dugme.nextElementSibling.classList.add("uspesno");
    }
    else{
        dugme.nextElementSibling.classList.remove("uspesno");
        dugme.nextElementSibling.classList.add("sakrijUspesno");
    }
}

}


function proveraRegularnihIzraza(re, obj){
    if(re.test(obj.value)){
        obj.nextElementSibling.classList.remove("prikaziGresku");
        obj.nextElementSibling.classList.add("sakrijGresku");
        return 0;
    }
    else{
        obj.nextElementSibling.classList.remove("sakrijGresku");
        obj.nextElementSibling.classList.add("prikaziGresku");
        return 1;
    }
    
}

