import React from 'react'

function Section_2(props) {
    return (
        <section className="container-fluid project-section-2">
            <div className="container">
                <div className="row project-row font justify-content-center p-4">
                    <div class=" col-lg-6 col-md-6 col-sm-9 text-sm-center col-12 pt-5 d-flex align-items-center" data-aos="fade-up">
                        <p class="">
                            {props.text}
                            
                    </p>

                    </div>


                </div>

            </div>
        </section>

    )
}

export default Section_2
