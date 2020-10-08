import React from 'react'

function Section_2(props) {
    return (
        <section className="container-fluid project-section-2">
              <div className="container">
              <div className="row project-row  font">
               <div className="col-lg-6 col-md-6 col-sm-9 text-sm-center col-12 pt-5 d-flex align-items-center" data-aos="fade-up">
                <p className="">
                    {props.text}
                </p>
               
            </div>

            <div className="col-lg-6 col-md-6 col-sm-9 col-12 pt-5" data-aos="fade-down">  
                <p className="">  
                    <span className="underline">What I learned:</span>
                </p>
            
                <ul className="">    
                <li>{props.line1}</li>
                <li>{props.line2}</li>
                <li>{props.line3}</li>
                <li>{props.line4}</li>
                <li>{props.line5}</li>
                <li>{props.line6}</li>
                <li>{props.line7}</li>
                   
                </ul>
            </div>

               </div>

              </div>
           </section>

    )
}

export default Section_2
