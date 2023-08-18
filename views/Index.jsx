import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

function Index({ pokemon }) {
    return (
        <div>
            <div style={myStyle}> See All The Pokemon! </div>
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