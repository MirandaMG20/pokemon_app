const express = require('express')
const app = express()
const port = 3005
const pokemon = require('./models/pokemon.js')

// Listener
// app.listen(3000, () => { console.log(`Server is listening.`)})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({extended: false}))

//ROUTE Home
app.get('/', (req, res) => {
    // res.send(pokemon)
    res.send(`<h1> Welcome to the <a href="/pokemon">Pokemon</a> App! <h1>`)
})

// pokemon Index
app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {
        pokemon: pokemon,
    })
})

// NEW pokemon Route
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create = Post
app.post('/pokemon', (req, res) =>{

    console.log('Created Pokemon: ', req.body)

    if(req.body.readyToFight === 'on') {
        req.body.readyToFight = true;
    } else {
        req.body.readyToFight = false;
    }

    pokemon.push(req.body)

    console.log('The pokemon array ', pokemon)

    res.redirect('/pokemon') // Redirect to the new Array
})

// Show pokemon Middleman
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', { 
        pokemon: pokemon[req.params.id], 
    })
})
