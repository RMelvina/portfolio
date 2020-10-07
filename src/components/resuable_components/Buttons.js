import React from 'react'

function Buttons(props) {
    return (
        <a href={props.btn_Url}>
        <button class={`${props.bClass} btn`} type="button">{props.btn_Name}</button>
    </a>
    )
}

export default Buttons
