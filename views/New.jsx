import React from 'react'

function New() {
    return (
        <div>
            <h1>New Pokemon Page</h1>

            <form action='/Pokemon' method='POST'>
                Name: <input type='text' name='name' /> <br />
                Image: <input type='text' name='img' /> <br />
                Ready to Fight: <input type='checkbox' name='readyToFight' /> <br />

                <input type='submit' value='Create Pokemon' /> <br />
            </form>

        </div>
    )
}

module.exports = New