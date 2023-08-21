import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#9fe8fa',
}

function Index({ pokemon }) {
    return (
        <div>

            <nav>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <a href={`/`}> Home </a>
                <br />
                <a href="/pokemon/new"> Create New Pokemon </a>
            </nav>
            <br />

            {
                pokemon.map((pokemon, i) => {
                    return (
                        <ul key={i}>
                            <li>
                                <a href={`/pokemon/${i}`}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </a>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

module.exports = Index