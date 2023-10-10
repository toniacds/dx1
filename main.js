function palavras(){

    const texto = document.querySelector ("h3");
    const A = document.querySelector("#Aldo").value;
    const J = document.querySelector("#Jucemara").value;

    if(A.length > 20 || J.length > 20){
        texto.innerHTML = "Numero de caracteres inválido";
    }

    else if(A.length > J.length){
    texto.innerHTML = "A palavra do Aldo é maior";
  }

    else if(A.length < J.length){
        texto.innerHTML = "A palavra da Jucemara é maior";
}

    else if(A.length === J.length){
    texto.innerHTML = "*";
}

else{
texto.innerHTML = "Erro";
}


}