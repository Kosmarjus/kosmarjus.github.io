/*jshint esversion: 6 */


//susideliojame salis i objektus su reikalingais parametrais objekte
const salys = {
    ltu: {
        pavadinimas: 'Lietuva',
        gyventojai: 2.8,
        plotas: 65300
    },
    ind: {
        pavadinimas: 'Indija',
        gyventojai: 1342.5,
        plotas: 3287590
    },
    chn: {
        pavadinimas: 'Kinija',
        gyventojai: 1388.2,
        plotas: 9596960
    },
    usa: {
        pavadinimas: 'Jungtinės Amerikos Valstijos',
        gyventojai: 326.4,
        plotas: 9826630
    }
};

//sutrumpinimas
let pasirinkimas = document.getElementById("pasirinkimas");

//priskiriame funkcija pasikeitus musu dropdown meniu pasirinkimui
pasirinkimas.onchange =  abrakadabra;

//funkcija su event parametru
function abrakadabra(choice) {

    //priskiriame evento verte kintamam
   let userChoice = choice.target.value;

 //jei nieko nepasirinkom - slepiam viska
    if (userChoice == "") {
        document.getElementById('textOutput').style.opacity=0;

 
    } else {
        document.getElementById('textOutput').style.opacity=1;        //jei kazka pasirinkom - grazinam teksto matomuma
        //ziurim objekto atitikmeni, imam atitinkama parametra
        document.getElementById('salis').innerHTML = salys[userChoice].pavadinimas; 
        document.getElementById('gyventojai').innerHTML = salys[userChoice].gyventojai.toLocaleString('lt-LT', {maximumFractionDigits: 2});
        document.getElementById('plotas').innerHTML = salys[userChoice].plotas.toLocaleString('lt-LT', {maximumFractionDigits: 2});
        document.getElementById('plotasGyventojui').innerHTML = (salys[userChoice].plotas / salys[userChoice].gyventojai).toLocaleString('lt-LT', {maximumFractionDigits: 2});
    }
}