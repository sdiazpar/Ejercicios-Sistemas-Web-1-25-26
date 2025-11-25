var express = require('express');
var router = express.Router();

function ensureLoggedIn(req, res, next) {
    if (req.session && req.session.user) return next();
    res.redirect('/login');
}

router.get('/', ensureLoggedIn, (req, res) => {
    res.render('chat', { title: 'Chat', username: req.session.user.username });
});

module.exports = router;
