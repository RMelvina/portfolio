import React from 'react'

function Section_3(props) {
    return (
        <section className="container-fluid project-info-section-3 pt-5 font-style">
                    <div className="container">
                        <div className="row justify-content-center">
                            {props.arryaName.map((items, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-9 pb-4 text-center">
                                        <img src={items.url} className="img-fluid project-img-info d-block mx-auto" alt=""></img>
                                        <h5 className="pt-3">
                                            {items.desc}

                                        </h5>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </section>
               
    )
}

export default Section_3
