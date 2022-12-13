// if(url == "/index.html" || url == "/about.html"){
    //navigacioni meni
// let nizLinkText = ["Početna", "O nama", "Usluge", "Kontakt", "Autor"];
// let nizLinkHref = ["index.html", "about.html", "price.html", "contact.html", "author.html"];

// let divNavMenu = document.querySelector("#navMenu");
// let formatZaIspisNavMenu = "";

// for(let i = 0; i < nizLinkHref.length; i++){
//     formatZaIspisNavMenu += `<a href="${nizLinkHref[i]}" class="nav-item nav-link">${nizLinkText[i]}</a>`;
// }
// divNavMenu.innerHTML = formatZaIspisNavMenu;
// }

// slider
// slideShow();

//     function slideShow(){
//         let trenutni = $("#slider .aktivna");

//         let sledeci = $(trenutni).next().length ? $(trenutni).next() : $(trenutni).parent().children(':first');

//         $(sledeci).addClass("aktivna");
//         $(trenutni).removeClass("aktivna");

//         setTimeout(slideShow, 1500)
//     }
//}
//ikonice u top headeru
let nizLinkovaDrustvenihMreza = ["fab fa-facebook-f", "fab fa-instagram", "fab fa-youtube", "fab fa-twitter"];
let linkoviDrustvenihMreza = ["www.facebook.com", "www.instagram.com", "www.youtube.com", "www.twitter.com"];
let divIkonica = document.getElementsByClassName("ikonica");
let ispisIkonica = "";
for(let i = 0; i < linkoviDrustvenihMreza.length; i++){
 ispisIkonica += `<a class="text-body px-2 href="${linkoviDrustvenihMreza[i]}"><i class="${nizLinkovaDrustvenihMreza[i]}"</i></a>`;
}
divIkonica = ispisIkonica;

//navigacioni meni
let nizLinkText = ["Početna", "O nama", "Usluge", "Kontakt", "Autor"];
let nizLinkHref = ["index.html", "about.html", "price.html", "contact.html", "author.html"];

let divNavMenu = document.querySelector("#navMenu");
let formatZaIspisNavMenu = "";

for(let i = 0; i < nizLinkHref.length; i++){
    formatZaIspisNavMenu += `<a href="${nizLinkHref[i]}" class="nav-item nav-link">${nizLinkText[i]}</a>`;
}
divNavMenu.innerHTML = formatZaIspisNavMenu;

//dinamic about
var aboutIcon = ["fa fa-3x fa-user-md", "fa fa-3x fa-procedures", "fa fa-3x fa-microscope", "fa fa-3x fa-ambulance "];
var aboutText = ["Qualified", "Emergency", "Accurate", "Free"];
var aboutText2 = ["Doctors", "Services", "Testing", "Ambulance"];

var aboutRow = document.getElementById("abRow");
for (index in aboutIcon) {
    aboutRow.innerHTML += `
    <div class="bg-light text-center rounded-circle py-4">
        <i class="${aboutIcon[index]} text-primary mb-3"></i>
        <h6 class="mb-0">${aboutText[index]}<small class="d-block text-primary">${aboutText2[index]}</small></h6>
    </div>`;
}

// slider
slideShow();

    function slideShow(){
        let trenutni = $("#slider .aktivna");

        let sledeci = $(trenutni).next().length ? $(trenutni).next() : $(trenutni).parent().children(':first');

        $(sledeci).addClass("aktivna");
        $(trenutni).removeClass("aktivna");

        setTimeout(slideShow, 1500)
    }

//zebra
var parniTabela01 = $(".table tbody tr:nth-child(even)");


    parniTabela01.css({"backgroundColor": "#13C5DD", "color": "#fff"});

    $(".table tbody tr:nth-child(odd)").css({"backgroundColor": "#1D2A4D", "color": "fff"});

let taster = document.getElementById("dugme");
taster.addEventListener("click", obradaForme);

// function obradaForme(){
//  let objImePrezime, objJMBG, objTip, objLekari, nizOsoba, objUslov, greska;

//  objImePrezime = document.getElementById("imePrezime");
//  objLekari = document.getElementById("ddlLekari");
//  objTip = document.getElementById("ddlPregled");
//  objUslov = document.getElementsByName("cb");
//  nizOsoba = getElementsByName("osoba");
//  objJMBG = document.getElementById("jmbg");
//  greska = document.getElementsByClassName("greska");

//  reImePrezime = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})+$/;
//  reJMBG = /^[\d]{13}$/;

//  proveraRegularnimIzrazima(reImePrezime, objImePrezime, "Ime i prezime nije u dobrom formatu. Primer: Marko Marković.");
//  proveraRegularnimIzrazima(reJMBG, objJMBG, "Potrebno je 13 cifara.");

//  let tipVrednost = objTip.options[objTip.selectedIndex].value;
//  let tipTekst = objTip.options[objTip.selectedIndex].text;

//   if(tipVrednost == "0"){
//    objTip.nextElementSibling.classList.remove("greska");
//    objTip.nextElementSibling.innerHTML = "Izaberite smer.";
//    objTip.classList.add("crvena-bordura");
   
//   }
//   else{
//       objTip.nextElementSibling.classList.add("greska");
//       objTip.nextElementSibling.innerHTML = "";
//       objTip.classList.remove("crvena-bordura");
//   }

  
//   let osobaVrednost = "";
//   for(let i = 0; i < nizOsoba.length; i++){
//       if(nizOsoba[i].checked){
//           osobaVrednost = nizOsoba[i].value;
//           break;
//       }
//   }
   
//   let uslovVrednost = "";
//   for(let i = 0; i < objUslov.length; i++){
//       if(objUslov[i].checked){
//           uslovVrednost += objUslov[i].value + " ";
//       }
//   }

//   if(osobaVrednost == ""){
//     nizOsoba[0].parentElement.parentElement.nextElementSibling.classList.remove("sakrij");
//     nizOsoba[0].parentElement.parentElement.nextElementSibling.innerHTML = "Morate izabrati osobu.";
    
//   }
//   else{
//     nizOsoba[0].parentElement.parentElement.nextElementSibling.classList.add("sakrij");
//     nizOsoba[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
//   }

//   if(uslovVrednost == ""){
//     objUslov[0].parentElement.parentElement.nextElementSibling.classList.remove("sakrij");
//     objUslov[0].parentElement.parentElement.nextElementSibling.innerHTML = "Morate izabrati da li prohvatate uslove.";
//     brojGresaka++;
//   }
//   else{
//     objUslov[0].parentElement.parentElement.nextElementSibling.classList.add("sakrij");
//     objUslov[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
//   }

//   proveraCekiranihElemenata(statusVrednost, nizStatus, "Morate izabrati status.");
//   proveraCekiranihElemenata(predmetiVrednost, nizPredmeti, "Morate izabrati bar jedan predmet.");
// }

function obradaForme(){
 let objImePrezime, objJMBG, objTip, objLekari, nizOsoba, objUslov, greska;

 objImePrezime = document.getElementById("imePrezime");
 objLekari = document.getElementById("ddlLekari");
 objTip = document.getElementById("ddlPregled");
 objUslov = document.getElementsByName("cb");
 nizOsoba = getElementsByName("osoba");
 objJMBG = document.getElementById("jmbg");
 greska = document.getElementsByClassName("greska");

 if (objLekari == "") {
  document.getElementById("greskaLekari").classList.remove("sakrij");
 } else {
  document.getElementById("greskaLekari").classList.add("sakrij");
 }

 if(objTip == ""){
  document.getElementById("greskaPregled").classList.remove("sakrij");
 } else {
  document.getElementById("greskaPregled").classList.add("sakrij");
 }

 
 }

