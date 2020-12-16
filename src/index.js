//---- VERSUS

const os           = require('os');
const path         = require('path');
const ejs          = require('ejs');
const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const NETWORK      = process.env.NETWORK || 'TESTNET';
const HOSTNAME     = os.hostname();


//---- START

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


//---- ROUTER

app.get('/', (req, res) => { 
	res.render('index.html'); 
});

app.get('/events', (req, res) => { 
	let theme = req.cookies.theme || 'dark-mode';
	res.render('events.html', {theme: theme}); 
});

app.get('/*', (req, res) => { 
	//res.redirect('/');          // Catch all
	res.render('index.html');   // Catch all
});


//---- LISTEN

let now = new Date();
console.log(now, 'VERSUS is running on', NETWORK, 'remotely');
app.listen(); 

// END