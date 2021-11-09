const imagen = document.getElementById("img");
function calcular(){
    let peso = Number(document.getElementById("txt_peso").value);
    let estatura = Number(document.getElementById("txt_estatura").value);
    let imc = ( peso / ( Math.pow( estatura,2 )));
    document.getElementById("res-imc").innerText = imc;

    if (imc < 18.5){
        imagen.src ="img/bajo.jpg";
        document.getElementById("res-tipo").innerText = "Estás muy delgado";

    }else if(imc >= 18.5 && imc <25){
        imagen.src ="img/normal.jpg";
        document.getElementById("res-tipo").innerText = "Estás muy bien";

    }else if(imc >= 25 && imc < 30){
        imagen.src ="img/sobre.jpg";
        document.getElementById("res-tipo").innerText = "Ojo, estás con sobrepeso";

    }else if(imc >= 30 && imc < 40){
        imagen.src ="img/obesidad.jpg";
        document.getElementById("res-tipo").innerText = "Obesidad";

    }else if(imc >=  40){
        imagen.src ="img/cronica.jpg";
        document.getElementById("res-tipo").innerText = "Obesidad crónica";
    }


}