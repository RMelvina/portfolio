import React from 'react'
import Buttons from '../../../resuable_components/Buttons'

function Section_1(props) {
    return (
        // https://github.com/RMelvina/QuickCoachingApp.git
        <section className="container-fluid project-info-section">
            <div className="container font-style font-size ">
                <div className="row d-flex  justify-content-center align-items-center " data-aos="fade-in">
                    
                    <div className="col-12  project-heading-col d-flex flex-column justify-content-center text-center" data-aos="fade-up">
                        <h2 className="pt-5 project-heading-font-size" data-aos="fade-up">Quick Coaching App</h2>
                      
                        <Buttons 
                        bClass={props.cBtn}
                        btn_Url={props.url}
                        btn_Name={props.btnN} />
                       
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Section_1
