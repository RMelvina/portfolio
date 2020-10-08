import React from 'react'
import { Backdrop, Tooltip } from '@material-ui/core';

function Re_Icons(props) {
    return (


      

      
           
            <a href={props.href} >
           <i className={props.cIconName} title={props.iconTitle}>
           <span className="toolT font-color">{props.toolTitle}</span>
            </i>
        </a>
           
      
      
      
      
       
        

    )
}

export default Re_Icons
