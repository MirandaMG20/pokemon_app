import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#9fe8fa',
}

function Show({ pokemon }) {

    // console.log(pokemon)

    return (
        <div>

            <nav>
                <h1 style={myStyle} > Gotta Catch 'Em All! </h1>
                <a href={`/`}> Home </a>
                <br />
                <a href='/pokemon'> Pokemon </a>
                <br />
                <a href="/pokemon/new"> Create New Pokemon </a>
            </nav>

            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <br />
            <img src={pokemon.img + '.jpg'} alt={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} />

        </div>
    )
}

module.exports = Show
