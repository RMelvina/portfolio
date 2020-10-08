import React from 'react'

function Section_1_Reuse(props) {
    return (
        <section className="container-fluid about-section" id="about">
        <div className="container about-container mx-auto">

        <div className="row justify-content-center align-items-center">
                        <div class="col-12 col-lg-4 col-md-5 col-sm-6  mx-auto my-5">
                            <div class="profile-img-container text-center ">
                                <img src={props.imgUrl} class="img-fluid img" />
                            </div>
                        </div>
                        <div class="col-12">
                            <p class=" font text-center ">
                                {props.text}
                            </p>
                            <hr class="divider" />
                        </div>
                    </div>



        </div>


    </section>
   
    )
}

export default Section_1_Reuse
