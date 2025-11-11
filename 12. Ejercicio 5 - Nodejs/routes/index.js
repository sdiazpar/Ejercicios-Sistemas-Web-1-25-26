var express = require('express');
var router = express.Router();

const elementos = [
  { nombre: 'Guitarra eléctrica', imagen: '/images/guitarra.jpg' },
  { nombre: 'Bajo eléctrico', imagen: '/images/bajo.jpg' },
  { nombre: 'Batería acústica', imagen: '/images/bateria.jpg' }  
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Instrumentos', elementos: elementos });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Iniciar sesión' });
});

module.exports = router;
