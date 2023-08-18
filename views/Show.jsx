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
            {
                pokemon.map((poke, i) => {
                    return (
                        <ul>
                            <li key={i}>
                                <a href={`/pokemon/${i}`}> {poke.name[0].toUpperCase() + poke.name.slice(1)} </a>
                                <br />
                                <img></img>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

module.exports = Show
