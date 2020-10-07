import React from 'react'

function Skills_Section(props) {
    return (
        <section className="container-fluid skills-section" id="skills">

            <div className="container">
                <div className="row row-flex">
                    {props.arrayName.map((items, index) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 skills-col-content text-center padding-0 padding">

                                <div className={items.cName}>
                                    <div className="container skills-container font-style">
                                        <h4>{items.title}</h4>
                                        <hr className="divider" />
                                        <div className="font-style">
                                            <h5>{items.skills}</h5>
                                        </div>

                                    </div>
                                </div>

                            </div>


                        )
                    })}

                </div>
            </div>


        </section>


    )
}

export default Skills_Section
