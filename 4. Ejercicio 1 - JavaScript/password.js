const diccionario = ["guitarraElectrica", "bajoElectrico", "bateriaAcustica", "pianoClasico", "violinModerno",  
"flautaTravesea", "saxofonAlto", "trompetaJazz", "arpaCelta", "cheloBarroco",  
"microfonoVocal", "amplificadorMarshall", "sintetizadorAnalogico", "mezcladoraDigital", "platillosCrash",  
"timbalOrquestal", "contrabajoJazz", "cajonFlamenco", "banjoAmericano", "ukeleleHawaiiano"];

function generarContraseña() {            
    const numeroPalabras = parseInt(document.getElementById("numPalabras").value);            
    const capitalizar = document.getElementById("capitalizar").checked;
    const noRepetir = document.getElementById("noRepetir").checked;       
    let palabrasSeleccionadas = [];
    let diccionarioCopia = [...diccionario];
    for (let i = 0; i < numeroPalabras; i++) {                
        const indiceAleatorio = Math.floor(Math.random() * diccionarioCopia.length);
        let palabra = diccionarioCopia[indiceAleatorio];
        if (noRepetir) {
            diccionarioCopia.splice(indiceAleatorio, 1);
        }
        if (capitalizar) {
            palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1);
        }
        palabrasSeleccionadas.push(palabra);
    }
    document.getElementById("resultado").textContent = "La contraseña generada es: " + palabrasSeleccionadas;
}
