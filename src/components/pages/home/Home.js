import React from 'react'
import Re_Icons from '../../resuable_components/Re_Icons'
import Re_Heading from '../../resuable_components/Re_Heading'

export class Home extends React.Component {
    render() {
        return (
        
            // justify-content-center align-items-center
            <section className="container-fluid home-bg-color  d-flex flex-column font-color  bg-img-home-pg bg-imgs_style">
                {/* <div className="container  "> */}
                    <div className="row d-flex flex-grow-1 justify-content-center align-items-center ">
                        <div className="col-12   text-center  ">

                            <Re_Heading cTitleName="main-font-size-heading "
                                heading="Melvina" />

                            <Re_Heading cTitleName=""
                                heading="Software Developer" />

                            <div className="icon-container">

                                <Re_Icons href="https://www.linkedin.com/in/melvina-raj-2a4a38109/"
                                    cIconName="fa fa-linkedin font-color icon"
                                    toolTitle="Linkedin"
                                    />


                                <Re_Icons href="https://github.com/RMelvina"
                                    cIconName="fa fa-github font-color icon"
                                    toolTitle="Github" />

                                <Re_Icons href="https://drive.google.com/file/d/1uX1kiMIA0wxUpVblZs-_GE_MdiApR1EY/view?usp=sharing"
                                    cIconName="fa fa-file font-color icon"
                                    toolTitle="CV" />

                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>

        )
    }
}

export default Home
