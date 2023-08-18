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
                pokemon.map((poke, i) => {
                    return (
                        <ul key={i}>
                            <li>
                                <a href={`/pokemon/${i}`}> {poke.name[0].toUpperCase() + poke.name.slice(1)} </a>
                                <br />
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

module.exports = Index