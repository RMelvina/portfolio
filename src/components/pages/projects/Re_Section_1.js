import React from 'react'
import Buttons from '../../resuable_components/Buttons'
import Imgs from '../../resuable_components/Images'
import Re_Heading from '../../resuable_components/Re_Heading'


function Re_Section_1(props) {
    return (
        
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-5 d-flex  justify-content-center">
        <div className="project-container">
            <div className="overlay">
                <Imgs imgUrl={props.imgU} />
                {/* <img src={items.imgUrl} className="img-fluid project-img" alt="" /> */}
                <div className="project-heading-container">

                    <h4 className="project-heading">{props.projectT}</h4>
                </div>
                <div className="buttons-container">
                   
                    <Buttons
                        bClass="view"
                        btn_Url={props.btnVU}
                        btn_Name={props.btnVN}
                        target={props.target} />
                    <Buttons
                        bClass="github"
                        btn_Url={props.btnGU}
                        btn_Name={props.btnGN}
                        target={props.target} />
                </div>

            </div>
        </div>
    </div>
   
    )
}

export default Re_Section_1
