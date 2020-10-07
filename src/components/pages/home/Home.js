import React from 'react'
import Re_Icons from '../../resuable_components/Re_Icons'
import Re_Heading from '../../resuable_components/Re_Heading'

function Home() {
    return (
        <section className="container-fluid  py-5 bg-img-home-pg bg-imgs_style">
        <div className="container">
            <div className="row max-height justify-content-center align-items-center">
                <div className="col-12  my-5 mx-auto text-center">

                    <Re_Heading cTitleName="main-font-size-heading"
                        heading="Melvina" />
                   
                    <div className="icon-container">

                        <Re_Icons href="https://www.linkedin.com/in/melvina-raj-2a4a38109/"
                            cIconName="fa fa-linkedin icon" />

                        <Re_Icons href="https://github.com/RMelvina"
                            cIconName="fa fa-github icon" />

                        <Re_Icons href="https://drive.google.com/file/d/1uX1kiMIA0wxUpVblZs-_GE_MdiApR1EY/view?usp=sharing"
                            cIconName="fa fa-file icon" />

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
