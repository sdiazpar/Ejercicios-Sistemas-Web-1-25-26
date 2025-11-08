const http = require('http');
const url = require('url');
const port = 3000;

const diccionario = ["guitarraElectrica", "bajoElectrico", "bateriaAcustica", "pianoClasico", "violinModerno",  
"flautaTravesea", "saxofonAlto", "trompetaJazz", "arpaCelta", "cheloBarroco",  
"microfonoVocal", "amplificadorMarshall", "sintetizadorAnalogico", "mezcladoraDigital", "platillosCrash",  
"timbalOrquestal", "contrabajoJazz", "cajonFlamenco", "banjoAmericano", "ukeleleHawaiiano"];

function generarContraseñaAleatoria(palabras) {
    let contraseña = [];
    for (let i = 0; i < palabras; i++) {
        const randomIndex = Math.floor(Math.random() * diccionario.length);
        contraseña.push(diccionario[randomIndex]);
    }
    return contraseña;
}

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const palabras = parseInt(queryObject.X) || 3;
    const contraseñaAleatoria = generarContraseñaAleatoria(palabras);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`Contrasenna aleatoria generada: ${contraseñaAleatoria}`);
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    console.log(`Ejemplo: http://localhost:${port}/?X=4`); // Cambia el número final para que la contraseña sea más larga
});