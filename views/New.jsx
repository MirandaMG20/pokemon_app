import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#9fe8fa',
    textAlign: 'center'
}

const Details = {
    textAlign: 'center'
}

function New() {
    return (
        <div style={Details}>
            <nav>
                <h1 style={myStyle}>New Pokemon Page</h1>
                <a href={`/`}> Home </a>
                <br />
                <a href='/pokemon'> Pokemon </a>
            </nav>
            <br />

            <form action='/Pokemon' method='POST'>
                Name: <input type='text' name='name' /> <br />
                {/* Image: <input type='text' name='img' /> <br /> */}
                Ready to Fight <input type='checkbox' name='readyToFight' /> 
                <br />
                <br />
                <input type='submit' value='Create Pokemon' /> <br />
            </form>

        </div>
    )
}

module.exports = New