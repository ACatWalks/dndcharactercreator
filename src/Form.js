import React from 'react'

function Form(props) {
    return (
        <div>
            <h1>Character Creation Form</h1>
            <p>{props.race}</p>
            <p>{props.characterClass}</p>
        </div>
    )
}

export default Form