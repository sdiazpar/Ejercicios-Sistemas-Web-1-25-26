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

router.get('/login', (req, res) => {
    if (req.session && req.session.user) return res.redirect('/chat');
    res.render('login', { title: 'Login'});
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        req.session.user = { username };
        return res.redirect('/chat');
    }

    res.render('login', { title: 'Login', error: 'Credenciales inválidas' });
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/');
    });
});

module.exports = router;
