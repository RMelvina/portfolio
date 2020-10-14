import React from 'react'
import Buttons from '../../resuable_components/Buttons'
import Imgs from '../../resuable_components/Images'
import Re_Heading from '../../resuable_components/Re_Heading'
import Re_Section_1 from './Re_Section_1'
import { Project_Section_Items } from '../arrya_items/ Project_Section_Items'


export class Section_1 extends React.Component {
    // const state = {target:false}
    constructor(props) {
        super(props)
    
        this.state = {
            target:false
        }

    }
    

    s = () => {
      
       
        
    }

    render(){

    

    return (
        <section className="container-fluid project-section font-style" id="projects">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        {/* <h1 className=" main-project-heading ">{props.title}</h1> */}
                        {Project_Section_Items.map((items, index) => {
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className=" main-project-heading ">{items.tille}</h1>
                                        </div>
                                    </div>

                                    <div className="row d-flex  align-items-center" key={index}>
                                        {/* <div className="col-12  bg-info"> */}
                                            {items.projects.map((ap) => {
                                                return (

                                                    <Re_Section_1
                                                        projectT={ap.projectTitle}
                                                        imgU={ap.imgUrl}
                                                        btnVN={ap.btnVName}
                                                        btnVU={ap.btnVUrl}
                                                        btnGN={ap.btnGName}
                                                        btnGU={ap.btnGUrl}
                                                        target={ap.target}
                                                       
                                                    />

                                                )
                                            })}
                                        {/* </div> */}
                                    </div>


                                </div>
                            )
                        })}
                    </div>






                </div>
            </div>
        </section>
        



    )
    }
}

export default Section_1
