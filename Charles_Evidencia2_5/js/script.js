//los botones de los numeros y operadores
var num = document.getElementsByClassName("btn_numero");
var op = document.getElementsByClassName("operador");

//Para los botones que se ocupe algo jaja
var limpiar = document.getElementById("btn_clear");
var apagar = document.getElementById("btn_off");
var prender = document.getElementById("btn_on");


var signoigualxd = document.getElementById("btn_res");
var res = document.getElementById("resultado");


function setResultado(valor) {
    document.getElementById('resultado').innerHTML = valor;
}

function getResultado() {
    return document.getElementById('resultado').innerHTML;
}

function add(num) {
    var resultado = getResultado();
    if (resultado != '0' || isNaN(num)) {
        setResultado (resultado + num);
    } else {
        setResultado(num);
    }
}

//resultado
signoigualxd.addEventListener("click",function calcular() {
    var total = eval(getResultado());
    setResultado(total);
});

//Limpia
limpiar.addEventListener("click", function limpiar(){
    res.innerHTML = "";
});

//Prende
prender.addEventListener("click", function apagar(){
    res.innerHTML = "";
    limpiar.disabled = false;
    signoigualxd.disabled = false;
    //Esto pa operador mami
    for (var i = 0; i <op.length; i++){
        op[i].disabled = false;
    }
    //Esto para números jaja
    for (var i = 0; i <num.length; i++){
        num[i].disabled = false;
    }
});


//Apagar
apagar.addEventListener("click", function apagar(){
    res.innerHTML = "apagado mami";
    limpiar.disabled = true;
    signoigualxd.disabled = true;
    //Esto pa operador mami
    for (var i = 0; i <op.length; i++){
        op[i].disabled = true;
    }
    //Esto para números jaja
    for (var i = 0; i <num.length; i++){
        num[i].disabled = true;
    }
});