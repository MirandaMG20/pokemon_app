import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#9fe8fa',
}

function Show({ pokemon }) {

    // console.log(pokemon)

    return (
        <div style={myStyle}>
            <h1> Gotta Catch 'Em All! </h1>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <br />
            <img src={ pokemon.img + '.jpg'} />
            <br />
            <a href='/pokemon'> Back </a>
        </div>
    )
}

module.exports = Show
