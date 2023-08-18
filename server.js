const express = require('express')
const app = express()
const port = 3000
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

//ROUTE
app.get('/', (req, res) => {
    // res.send(pokemon)
    res.send('<h1>Welcome to Pokemon!<h1>')
})

// pokemon Index
app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {
        pokemon: pokemon,
    })
})

// Show pokemon Middleman
app.get('/:index', (req, res) => {
    res.render('Show', { 
        poke: pokemon[req.params.index], 
    })
})