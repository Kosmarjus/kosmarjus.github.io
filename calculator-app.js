// Pagrindinis kintamasi, kuriame saugosime kalkuliatoriaus ekrano reikšmę
let result = "";

// reiksmes isvalymo flag'as po lygybes paspaudimo
var equalClear;

// Kalkuliatoriaus ekrano elementas
let outputEl = document.querySelector(".output");

// Mygtukai
let oneBtn = document.querySelector(".one"),
    twoBtn = document.querySelector(".two"),
    threeBtn = document.querySelector(".three"),
    fourBtn = document.querySelector(".four"),
    fiveBtn = document.querySelector(".five"),
    sixBtn = document.querySelector(".six"),
    sevenBtn = document.querySelector(".seven"),
    eightBtn = document.querySelector(".eight"),
    nineBtn = document.querySelector(".nine"),
    zeroBtn = document.querySelector(".zero"),
    cBtn = document.querySelector(".c"),
    dotBtn = document.querySelector(".dot"),
    negBtn = document.querySelector(".neg"),
    plusBtn = document.querySelector(".plus"),
    minusBtn = document.querySelector(".minus"),
    multiplyBtn = document.querySelector(".multiply"),
    divideBtn = document.querySelector(".divide"),
    equalBtn = document.querySelector(".equal"),
    backspaceBtn = document.querySelector(".backspace"),
    leftparBtn = document.querySelector(".leftpar"),
    rightparBtn = document.querySelector(".rightpar");


// Registruojam mygtukų paspaudimus

//TODO simplify event listeners
oneBtn.addEventListener("click", function () {
    addToResult("1");
});

twoBtn.addEventListener("click", function () {
    addToResult("2");
});

threeBtn.addEventListener("click", function () {
    addToResult("3");
});

fourBtn.addEventListener("click", function () {
    addToResult("4");
});

fiveBtn.addEventListener("click", function () {
    addToResult("5");
});

sixBtn.addEventListener("click", function () {
    addToResult("6");
});

sevenBtn.addEventListener("click", function () {
    addToResult("7");
});

eightBtn.addEventListener("click", function () {
    addToResult("8");
});

nineBtn.addEventListener("click", function () {
    addToResult("9");
});

zeroBtn.addEventListener("click", function () {
    addToResult("0");
});

//c listeneris
cBtn.addEventListener("click", function () {
    clearResult();
});



dotBtn.addEventListener("click", function () {
    dotResult(".");
});

//neg listeneris
negBtn.addEventListener("click", function () {
    negResult("-1");
});

//operatoriai

plusBtn.addEventListener("click", function () {
    operatorResult("+");
});

minusBtn.addEventListener("click", function () {
    operatorResult("-");
});

multiplyBtn.addEventListener("click", function () {
    operatorResult("*");
});

divideBtn.addEventListener("click", function () {
    operatorResult("/");
});

equalBtn.addEventListener("click", function () {
    equalResult();
});

backspaceBtn.addEventListener("click", function () {
    backspaceResult();
});


//leftpar
leftparBtn.addEventListener("click", function () {
    leftparResult('(');
});


//rightpar
rightparBtn.addEventListener("click", function () {
    rightparResult(')');
});



// Su šia funkcija pridedame simbolius (skaičiai, matematiniai operatoriai) į result
// Taip pat rezult kintamąjį atvaizduojame ekrane
function addToResult(textToAdd) {



    if (equalClear) { //jei buvo paspausta lygybe - naujas rezultatas bus lygus tik naujam paspaudimui (textToAdd)

        result = textToAdd;
        outputEl.innerText = result;
        equalClear = false; //grazinam flag'o pradine busena

    } else {

        if (result !== "Infinity") { //kad nelipdytu skaiciu prie uzraso Infinity


            if (result.charAt(0) === '0' && result.charAt(1) !== "." && result.charAt(1) !== "+" && result.charAt(1) !== "-" && result.charAt(1) !== "*" && result.charAt(1) !== "/") //pratrinam priekinius nulius, jei antras simbolis ne toks
            {
                result = result.slice(1);
            }


            result = result + textToAdd;
            outputEl.innerText = result;
        }
    }
}


//C ekrano isvalymo f-ja
function clearResult() {

    result = "0";
    outputEl.innerText = result;
}

//neg funkcija (reiksmes bei paskutinio veiksmo poliariskumo keitimui)
function negResult(neg) {
    equalClear = false; //grazinam flag'o pradine busena kad +- keitimas neistrintu rezultato

    let plusLocation = result.lastIndexOf('+');
    // console.log(plusLocation);
    let minusLocation = result.lastIndexOf('-');
    // console.log(minusLocation);

    if (plusLocation === -1 && minusLocation === -1) {
        result = parseFloat(result);
        result = +result * +neg;
        result = result.toString();
        outputEl.innerText = result;
    }

    if (plusLocation > minusLocation) {
        //stackoverflow tailored insertcharat start
        result = setCharAt(result, result.lastIndexOf('+'), '-');
        outputEl.innerText = result;

        function setCharAt(result, index, char) {
            if (index > result.length - 1) return result;
            return result.substr(0, index) + char + result.substr(index + 1);
        }
        //stackoverflow insertcharat end
    }
    if (plusLocation < minusLocation) {
        //stackoverflow tailored insertcharat start
        result = setCharAt(result, result.lastIndexOf('-'), '+');
        outputEl.innerText = result;

        function setCharAt(result, index, char) {
            if (index > result.length - 1) return result;
            return result.substr(0, index) + char + result.substr(index + 1);
        }
        //stackoverflow insertcharat end
    }


}


//. funkcija 
function dotResult(dot) {
    equalClear = false; //grazinam flag'o pradine busena kad +- keitimas neistrintu rezultato
    if (result !== "Infinity") { //kad nelipdytu tasko prie uzraso Infinity



        let dotLocation = result.lastIndexOf(dot);
        let plusLocation = result.lastIndexOf('+');
        let minusLocation = result.lastIndexOf('-');
        let multiplyLocation = result.lastIndexOf('*');
        let divideLocation = result.lastIndexOf('/');
        let maxOperatorLocation = Math.max(plusLocation, minusLocation, multiplyLocation, divideLocation);

        if (result.charAt(result.length - 1) !== "." && result != Infinity && dotLocation <= maxOperatorLocation) {

            result = result + dot;
            outputEl.innerText = result;
        }
    }
}


//operatoriu funkcija
function operatorResult(textToAdd) {
     //grazinam flag'o pradine busena kad +- keitimas neistrintu rezultato
    let checker = result.charAt(result.length - 1);

    if (checker == "*" || checker == "/" || checker == "+" || checker == "-") { //jeigu paskutinis irasytas simbolis buvo vienas is operatoriu - keiciam ta operatoriu

        //stackoverflow tailored insertcharat start
        result = setCharAt(result, result.length - 1, textToAdd);

        function setCharAt(result, index, char) {
            if (index > result.length - 1) return result;
            return result.substr(0, index) + char + result.substr(index + 1);
        }
        //stackoverflow insertcharat end
        outputEl.innerText = result;

    } else if (checker == ".") {
        //jei taskas - nedarom nieko
    } else { //jei paskutinis irasytas simbolis nebuvo operatorius - rasom nauja operatoriu

        result = result + textToAdd;
        outputEl.innerText = result;
    }
}

//equal
function equalResult() {
    let plusLocation = result.lastIndexOf('+');
    let minusLocation = result.lastIndexOf('-');
    let multiplyLocation = result.lastIndexOf('*');
    let divideLocation = result.lastIndexOf('/');
    let maxOperatorLocation = Math.max(plusLocation, minusLocation, multiplyLocation, divideLocation);
    if (maxOperatorLocation + 1 === result.length) { //nukerpam jei operatorius gale nereikalingas
        result = result.slice(0, -1);
    }

    result = eval(result);
    outputEl.innerText = result;
    result = parseFloat(result); //reikia kad rezultatas liktu vienas skaicius, o ne stringas
    result = result.toString(); //paverciame i stringa ateitiems operatoriam


    equalClear = true;
    console.log(result);
}

//backspace paskutinio simbolio isvalymo f-ja
function backspaceResult() {
    result = result.slice(0, -1);
    outputEl.innerText = result;
}




//leftpar must be next to an operator or null to enter
function leftparResult(par) {


    result = result+par
    outputEl.innerText = result;
}



//rightpar must not exceed the quantitty of leftpars, + should auto close by counting leftpars (maybe into equal)
function rightparResult(par) {
    result = result+par
    outputEl.innerText = result;
}