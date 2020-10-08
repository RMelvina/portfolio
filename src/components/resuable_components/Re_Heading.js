import React from 'react'

function Re_Heading(props) {
    
    return (

        <h1 className={props.cTitleName}>
            <strong className={props.cTitleName}>
                {props.heading}
            </strong>
        </h1>


    )
}

export default Re_Heading
