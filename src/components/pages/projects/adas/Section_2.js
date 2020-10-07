import React from 'react'

function Section_2(props) {
    return (
        <section class="container-fluid project-section-2">
            <div class="container font-style font-size ">
                <div class="row justify-content-center project-row font" data-aos="fade-in">

                    <div class="col-lg-6 col-md-6 col-sm-9 text-sm-center col-12 pt-5 d-flex align-items-center" data-aos="fade-up">
                        <p class="">
                            {props.text}
                            {/* I was in a team of six for this project, this app was designed 
                    to help the assessor to eliminate the need for paper management system.
                    The app has 20 unstructured questions used in assessing Alzheimer’s Disease.           */}
                        </p>

                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-9 col-12 pt-5 pl-5" data-aos="fade-down">
                        <p class="">
                            <span class="underline">What I learned:</span>
                        </p>

                        <ul class="">
                            <li>{props.line1}</li>
                            <li>{props.line2}</li>
                            <li>{props.line3}</li>
                            <li>{props.line4}</li>
                            <li>{props.line5}</li>
                            {/* <li>Firebase Authentication and data management with Firebase SDK</li>
                    <li>Places API</li>
                    <li>Speech-To-Text API</li>
                    <li>Coordination with team</li>
                    <li>Github</li> */}
                        </ul>
                    </div>



                </div>


            </div>
        </section>

    )
}

export default Section_2
