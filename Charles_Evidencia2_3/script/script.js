function calculadora(operation){
    document.getElementById("pro").hidden = true;
    document.getElementById("std").hidden = true;
    document.getElementById(operation).hidden = false;
}

function potencia(){
    let lbl_nump = document.createElement("h2");
    lbl_nump.id = "subtitulos";
    lbl_nump.textContent = "Ingrese número: ";
    lbl_nump.className = "subtitulos content";
    contenido.appendChild(lbl_nump);

    let txt_num1p = document.createElement("input");
    txt_num1p.id = "num1";
    txt_num1p.placeholder = "Ingresa num 1";
    txt_num1p.type = "text";
    txt_num1p.className = "content";
    //txt_num1.setAttribute("class","content");
    contenido.appendChild(txt_num1p);

    let lbl_num2p = document.createElement("h2");
    lbl_num2p.id = "subtitulos";
    lbl_num2p.textContent = "Ingrese número: ";
    lbl_num2p.className = "subtitulos content";
    contenido.appendChild(lbl_num2p);

    let txt_num2p = document.createElement("input");
    txt_num2p.id = "num2";
    txt_num2p.placeholder = "Ingresa num 2";
    txt_num2p.type = "text";
    txt_num2p.setAttribute("class","content");
    contenido.appendChild(txt_num2p);

    let btn_resultadop = document.createElement("button");
    btn_resultadop.type = "button";
    btn_resultadop.innerText = "Da clic para el resultado";
    btn_resultadop.className = "btn-resultado content";
    contenido.appendChild(btn_resultadop);
    

    btn_resultadop.onclick = function() {
        var contenido1p = parseInt(document.getElementById("num1").value);
        var contenido2p =parseInt(document.getElementById("num2").value);
        let suma = (Math.pow(contenido1p, contenido2p));
        alert(suma);
    }

    //return (Math.pow(num1,num2));

}
function suma(){
    let lbl_nums = document.createElement("h2");
    lbl_nums.id = "subtitulos";
    lbl_nums.textContent = "Ingrese número: ";
    lbl_nums.className = "subtitulos content";
    contenido.appendChild(lbl_nums);

    let txt_num1s = document.createElement("input");
    txt_num1s.id = "num1";
    txt_num1s.placeholder = "Ingresa num 1";
    txt_num1s.type = "text";
    txt_num1s.className = "content";
    //txt_num1.setAttribute("class","content");
    contenido.appendChild(txt_num1s);

    let lbl_num2s = document.createElement("h2");
    lbl_num2s.id = "subtitulos";
    lbl_num2s.textContent = "Ingrese número: ";
    lbl_num2s.className = "subtitulos content";
    contenido.appendChild(lbl_num2s);

    let txt_num2s = document.createElement("input");
    txt_num2s.id = "num2";
    txt_num2s.placeholder = "Ingresa num 2";
    txt_num2s.type = "text";
    txt_num2s.setAttribute("class","content");
    contenido.appendChild(txt_num2s);

    let btn_resultados = document.createElement("button");
    btn_resultados.type = "button";
    btn_resultados.innerText = "Da clic para el resultado";
    btn_resultados.className = "btn-resultado content";
    contenido.appendChild(btn_resultados);
    

    btn_resultados.onclick = function() {
        var contenido1s = parseInt(document.getElementById("num1").value);
        var contenido2s =parseInt(document.getElementById("num2").value);
        let suma = contenido1s + contenido2s;
        alert(suma);
    }

}

function resta(){
    let lbl_numr = document.createElement("h2");
    lbl_numr.id = "subtitulos";
    lbl_numr.textContent = "Ingrese número: ";
    lbl_numr.className = "subtitulos content";
    contenido.appendChild(lbl_numr);

    let txt_num1r = document.createElement("input");
    txt_num1r.id = "num1";
    txt_num1r.placeholder = "Ingresa num 1";
    txt_num1r.type = "text";
    txt_num1r.className = "content";
    //txt_num1.setAttribute("class","content");
    contenido.appendChild(txt_num1r);

    let lbl_num2r = document.createElement("h2");
    lbl_num2r.id = "subtitulos";
    lbl_num2r.textContent = "Ingrese número: ";
    lbl_num2r.className = "subtitulos content";
    contenido.appendChild(lbl_num2r);

    let txt_num2r = document.createElement("input");
    txt_num2r.id = "num2";
    txt_num2r.placeholder = "Ingresa num 2";
    txt_num2r.type = "text";
    txt_num2r.setAttribute("class","content");
    contenido.appendChild(txt_num2r);

    let btn_resultador = document.createElement("button");
    btn_resultador.type = "button";
    btn_resultador.innerText = "Da clic para el resultado";
    btn_resultador.className = "btn-resultado content";
    contenido.appendChild(btn_resultador);
    

    btn_resultador.onclick = function() {
        var contenido1r = parseInt(document.getElementById("num1").value);
        var contenido2r =parseInt(document.getElementById("num2").value);
        let suma = contenido1r - contenido2r;
        alert(suma);
    }
}
function division(){

    let lbl_numd = document.createElement("h2");
    lbl_numd.id = "subtitulos";
    lbl_numd.textContent = "Ingrese número: ";
    lbl_numd.className = "subtitulos content";
    contenido.appendChild(lbl_numd);

    let txt_num1d = document.createElement("input");
    txt_num1d.id = "num1";
    txt_num1d.placeholder = "Ingresa num 1";
    txt_num1d.type = "text";
    txt_num1d.className = "content";
    //txt_num1.setAttribute("class","content");
    contenido.appendChild(txt_num1d);

    let lbl_num2d = document.createElement("h2");
    lbl_num2d.id = "subtitulos";
    lbl_num2d.textContent = "Ingrese número: ";
    lbl_num2d.className = "subtitulos content";
    contenido.appendChild(lbl_num2d);

    let txt_num2d = document.createElement("input");
    txt_num2d.id = "num2";
    txt_num2d.placeholder = "Ingresa num 2";
    txt_num2d.type = "text";
    txt_num2d.setAttribute("class","content");
    contenido.appendChild(txt_num2d);

    let btn_resultadod = document.createElement("button");
    btn_resultadod.type = "button";
    btn_resultadod.innerText = "Da clic para el resultado";
    btn_resultadod.className = "btn-resultado content";
    contenido.appendChild(btn_resultadod);
    

    btn_resultadod.onclick = function() {
        var contenido1d = parseInt(document.getElementById("num1").value);
        var contenido2d =parseInt(document.getElementById("num2").value);
        if (contenido2d == 0){
            alert("no dividas entre 0");
        }else{
            let div = contenido1d / contenido2d;
            alert(div);
        }
        
    }
    let res = 0;
    if (num2 == 0){
        console.log("No se puede efectuar la división");
    }else{
        return num1 / num2;
    }
}

function multiplicacion(){
    let lbl_numm = document.createElement("h2");
    lbl_numm.id = "subtitulos";
    lbl_numm.textContent = "Ingrese número: ";
    lbl_numm.className = "subtitulos content";
    contenido.appendChild(lbl_numm);

    let txt_num1m = document.createElement("input");
    txt_num1m.id = "num1";
    txt_num1m.placeholder = "Ingresa num 1";
    txt_num1m.type = "text";
    txt_num1m.className = "content";
    //txt_num1.setAttribute("class","content");
    contenido.appendChild(txt_num1m);

    let lbl_num2m = document.createElement("h2");
    lbl_num2m.id = "subtitulos";
    lbl_num2m.textContent = "Ingrese número: ";
    lbl_num2m.className = "subtitulos content";
    contenido.appendChild(lbl_num2m);

    let txt_num2m = document.createElement("input");
    txt_num2m.id = "num2";
    txt_num2m.placeholder = "Ingresa num 2";
    txt_num2m.type = "text";
    txt_num2m.setAttribute("class","content");
    contenido.appendChild(txt_num2m);

    let btn_resultadom = document.createElement("button");
    btn_resultadom.type = "button";
    btn_resultadom.innerText = "Da clic para el resultado";
    btn_resultadom.className = "btn-resultado content";
    contenido.appendChild(btn_resultadom);
    

    btn_resultadom.onclick = function() {
        var contenido1m = parseInt(document.getElementById("num1").value);
        var contenido2m =parseInt(document.getElementById("num2").value);
        let suma = contenido1m * contenido2m;
        alert(suma);
    }

}

function varianza(array2,promdes){
   let res = 0;
   let var_resta = [];
   let varianza =[];
   let cont = 0;
   let var_total = 0;
   //Resta de cada variable
   for (let i in array2){
       res = promdes - array2[i];
       var_resta.push(res);
   }
   //Sacar la raíz cuadrada
   for (let j in var_resta){
       res = (Math.pow(var_resta[j],2));
       varianza.push(res);
       cont += 1;
   }
   //Sacamos la varianza aquí
   for (let k in varianza){
       var_total = var_total + varianza[k];
   }
   return var_total / cont;

}
function desviacion(resvar){
    return (Math.sqrt(resvar) + "mm" );
}


//Tomar elementos del documento html
let body = document.getElementsByTagName("body")[0];
let btn_cont = document.getElementById("cont-btn");
let titulo =document.getElementById('titulo');
let contenido = document.getElementById("contenido");
//botonos
let btn_suma = document.getElementById('btn_suma');
let btn_resta = document.getElementById('btn_resta');
let btn_multi = document.getElementById('btn_multi');
let btn_div = document.getElementById('btn_div');
let btn_promo = document.getElementById('btn_promo');
let btn_des = document.getElementById('btn_des');
let btn_pot = document.getElementById('btn_pot');
//Asignarles css
btn_cont.className = "content botones";
titulo.className = " content titulo";

//Asignarles sus hijos
body.appendChild(contenido);
contenido.appendChild(titulo);
contenido.appendChild(btn_cont);
btn_cont.appendChild(btn_suma);
btn_cont.appendChild(btn_resta);
btn_cont.appendChild(btn_multi);
btn_cont.appendChild(btn_div);
btn_cont.appendChild(btn_promo);
btn_cont.appendChild(btn_des);
btn_cont.appendChild(btn_pot);
//tipo formulario xd
