function encriptar(){
    let texto = document.getElementById("texto").ariaValueMax;
    let tituloMenaje = document.getElementById("titulo mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMenaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent ="";
        muñeco.src = "./assets/encriptado.jpg";
    }else{
        muñeco.src = "/.assets/muñeco.jpg";
        tituloMenaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}