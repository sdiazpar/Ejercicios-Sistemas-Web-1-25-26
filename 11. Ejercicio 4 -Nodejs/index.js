const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.futbolfantasy.com/analytics/laliga-fantasy/mercado';

async function obtenerTopJugadores() {
  try {
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const $ = cheerio.load(data);
    const jugadores = [];

    $('.elemento_jugador').each((i, el) => {
      const nombre = $(el).attr('data-nombre');
      const equipo = $(el).attr('data-equipo');
      const diferencia = parseInt($(el).attr('data-diferencia1'), 10);
      const valor = parseInt($(el).attr('data-valor'), 10);

      if (nombre && !isNaN(diferencia)) {
        jugadores.push({ nombre, equipo, diferencia, valor });
      }
    });

    const top10 = jugadores.sort((a, b) => b.diferencia - a.diferencia).slice(0, 10);

    console.log('Los 10 jugadores que más han crecido de valor:\n');
    top10.forEach((j, i) => {
      console.log(`${i + 1}. ${j.nombre} (+${j.diferencia.toLocaleString()} €)`);
    });

  } catch (err) {
    console.error('Error al hacer scraping:', err.message);
  }
}

obtenerTopJugadores();
