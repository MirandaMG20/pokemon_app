import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#9fe8fa',
    textAlign: 'center'
}

const Details = {
    textAlign: 'center'
}

function Index({ pokemon }) {
    return (
        <div>

            <nav style={Details}>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <a href={`/`}> Home </a>
                <br />
                <a href="/pokemon/new"> Create New Pokemon </a>
            </nav>
            <br />

            <div  >
            {
                pokemon.map((pokemon, i) => {
                    return (
                        <ul key={i}>
                            <li>
                                <a href={`/pokemon/${i}`}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </a>
                                <br />
                            {pokemon.readyToFight ? "It's ready to fight!" : "It's NOT ready to fight."}
                            </li>
                        </ul>
                    )
                })
            }
            </div>

        </div>
    )
}

module.exports = Index