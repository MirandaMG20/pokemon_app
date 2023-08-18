import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

function Show({ pokemon }) {

    // console.log(pokemon)

    return (
        <div>
            <div style={myStyle}> Gotta Catch 'Em All! </div>
            <h2>{pokemon.name}</h2>
            <img src={{pokemon.img}} />
        </div>
    )
}

module.exports = Show
