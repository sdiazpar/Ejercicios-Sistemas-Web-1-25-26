const http = require("http");
const port = 3000;
const os = require("os");
const config = require("./config.json");

const server = http.createServer((req, res) => {
    res.end("<h1>La informacion se encuentra en la consola</h1>");
});

server.listen(port, () => {
    console.log("Información del sistema:");
    console.log("Versión del sistema:", os.version());
    console.log("Tipo de sistema operativo:", os.type());
    console.log("Arquitectura:", os.arch());
    console.log("Memoria Total(GB):", (os.totalmem()/1073741824).toFixed(2));
    console.log("Versión de node.js:", process.version);
    console.log("------------------------------------");
});

function infoPeriodica() {
    console.log("Información mostrada de forma periodica:");
    console.log("Uso de CPU:", process.cpuUsage());
    console.log("Uso de memoria:", process.memoryUsage());
    console.log("Tiempo que el sistema lleva activo (en minutos):", (os.uptime()/60).toFixed(3));
    console.log("Tiempo que lleva ejecutándose node.js (en segundos):", (process.uptime()).toFixed(3));
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
}

setInterval(infoPeriodica, config.intervalo * 1000);
