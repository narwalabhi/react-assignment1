import React from 'react'
import './InputPerson.css'
const inputPerson = (props) => {
    return (
        <div className="Input">
            <input type="text" className="input-box" placeholder="Name" onChange={props.changed}/>
        </div>
    )
}

export default inputPerson;