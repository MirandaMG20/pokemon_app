require('dotenv').config()
// Set up Mongoose connection
const mongoose = require('mongoose')

const express = require('express')
const app = express()

const pokemon = require('./models/pokemon.js')
const Poke = require('./models/poke.js')

const port = 3005

// Listener
// app.listen(3000, () => { console.log(`Server is listening.`)})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URI, {
    // Get rid of errors in the console
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    // console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({ extended: false }))

//ROUTE Home
app.get('/', (req, res) => {
    // res.send(pokemon)
    res.send(`<h1> Welcome to the <a href="/pokemon">Pokemon</a> App! <h1>`)
})

// Pokemon Index
app.get('/pokemon', async function (req, res) {
    const foundPokemon = await Poke.find({})
    // res.send(pokemon)
    res.render('Index', {
        pokemon: foundPokemon,
    })
})

// NEW pokemon Route
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create = Post
app.post('/pokemon', async (req, res) => {
    // console.log('Created Pokemon: ', req.body)
    if (req.body.readyToFight === 'on') {
        req.body.readyToFight = true;
    } else {
        req.body.readyToFight = false;
    }
    // pokemon.push(newPokemon)
    const newPokemon = await Poke.create({
        name: req.body.name,
        img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase()
    })
    res.redirect('/pokemon') // Redirect to the new Array
})

// Show pokemon Middleman
app.get('/pokemon/:id', async (req, res) => {
    const onePokemon = await Poke.findById(req.params.id)
    res.render('Show', {
        pokemon: onePokemon
    })
})
