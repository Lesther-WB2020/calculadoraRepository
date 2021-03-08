const mousetrap = require('mousetrap');

mousetrap.bind('1',clickUno);
mousetrap.bind('2',clickDos);
mousetrap.bind('3',clickTres);
mousetrap.bind('4',clickCuatro);
mousetrap.bind('5',clickCinco);
mousetrap.bind('6',clickSeis);
mousetrap.bind('7',clickSiete);
mousetrap.bind('8',clickOcho);
mousetrap.bind('9',clickNueve);
mousetrap.bind('0',clickCero);
mousetrap.bind('+',clickSuma);
mousetrap.bind('-',clickResta);
mousetrap.bind('*',clickProducto);
mousetrap.bind('/',clickDivision);

document.getElementById('botonUno').addEventListener('click',clickUno);
document.getElementById('botonDos').addEventListener('click',clickDos);
document.getElementById('botonTres').addEventListener('click',clickTres);
document.getElementById('botonCuatro').addEventListener('click',clickCuatro);
document.getElementById('botonCinco').addEventListener('click',clickCinco);
document.getElementById('botonSeis').addEventListener('click',clickSeis);
document.getElementById('botonSiete').addEventListener('click',clickSiete);
document.getElementById('botonOcho').addEventListener('click',clickOcho);
document.getElementById('botonNueve').addEventListener('click',clickNueve);
document.getElementById('botonCero').addEventListener('click',clickCero);
document.getElementById('botonBack').addEventListener('click',clickBack);
document.getElementById('botonClean').addEventListener('click',clickClean);

document.getElementById('suma').addEventListener('click',clickSuma);
document.getElementById('resta').addEventListener('click',clickResta);
document.getElementById('producto').addEventListener('click',clickProducto);
document.getElementById('division').addEventListener('click',clickDivision);
//IT´S THE SAME THING LIKE: document.getElementById('botonUno').onclick=clickUno;

var numActual = document.getElementById('numeroActual');
var resultadoElemento = document.getElementById('resultado');
var elementoOperaciones = document.getElementById('operacionesHistorial');

var actual = '';
var resultado = 0;
var contador = 1;
var contentHistoryNew = '';
var primerNumero = '';

function clickUno(){
    actual +=1;
        numActual.innerHTML = actual;
}

function clickDos(){
    actual +=2;
        numActual.innerHTML = actual;
}

function clickTres(){
    actual +=3;
        numActual.innerHTML = actual;
}

function clickCuatro(){
    actual +=4;
        numActual.innerHTML = actual;
}

function clickCinco(){
    actual +=5;
        numActual.innerHTML = actual;
}

function clickSeis(){
    actual +=6;
        numActual.innerHTML = actual;
}

function clickSiete(){
    actual +=7;
        numActual.innerHTML = actual;
}

function clickOcho(){
    actual +=8;
        numActual.innerHTML = actual;
}

function clickNueve(){
    actual +=9;
        numActual.innerHTML = actual;
}

function clickCero(){
    if(actual!=''){
        actual += 0;
        numActual.innerHTML = actual;
    }else{
        alert('los ceros a la izquierda no valen nada.');
    }
}

function clickSuma(){
    if((actual != '')&&(resultadoElemento.innerHTML!=0)){
        primerNumero = resultado;
        resultado += parseInt(actual);
            addItemToHistori(primerNumero,'+');
    }else if(resultadoElemento.innerHTML==0){
        //debido a que es el primero n'umero y 
        //eventualmente no tiene con qui'en restarse.
        firstTime();
    }
}

function clickResta(){
    if((actual != '')&&(resultadoElemento.innerHTML!=0)){
        primerNumero = resultado;
        resultado -= parseInt(actual);
            addItemToHistori(primerNumero,'-');
    }else if(resultadoElemento.innerHTML==0){
        firstTime();
    }
}

function clickProducto(){
    if((actual != '')&&(resultadoElemento.innerHTML!=0)){
        primerNumero=resultado;
        resultado *= parseInt(actual);
            addItemToHistori(primerNumero,'*');
    }else if(resultadoElemento.innerHTML==0){
        firstTime();
    }
}

function clickDivision(){
    if((actual != '')&&(resultadoElemento.innerHTML!=0)){
            primerNumero=resultado;
                 resultado /= parseInt(actual);
                     addItemToHistori(primerNumero,'/');
    }else if(resultadoElemento.innerHTML==0){
        firstTime();
    }
}

function firstTime(){
        resultado = parseInt(actual);
        actual='';
        numActual.innerHTML='0';
        resultadoElemento.innerHTML=resultado;
}

function clickBack(){
    if((actual != '')&&(numActual.innerHTML.length!=1)){
        actual = actual.slice(0,actual.length-1); 
        numActual.innerHTML = actual;
    }else{
        actual='';
        numActual.innerHTML = '0';
    }
}

function clickClean(){
        actual='';
        resultado=0;
        numActual.innerHTML='0';
        resultadoElemento.innerHTML=resultado;
}

function addItemToHistori(prNumero,signoOperacion){
        contentHistoryNew = contador + ') ' + prNumero +' '+signoOperacion+' '+ actual+' = ' + resultado;
        contador++;
        elementoOperaciones.innerHTML += contentHistoryNew + '<br>';
        actual='';
        numActual.innerHTML='0';
        resultadoElemento.innerHTML = resultado;
}