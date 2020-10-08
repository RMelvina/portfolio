import React from 'react'
import Buttons from '../../resuable_components/Buttons'
import Imgs from '../../resuable_components/Images'
import Re_Heading from '../../resuable_components/Re_Heading'


function Section_1(props) {
    return (
        <section class="container-fluid project-section" id="projects">
            <div class="container font-style">
                <h1 class=" main-project-heading ">{props.title}</h1>
            </div>
            <div class="container">
            <div class="row pt-5 ">
            {props.arryaName.map((items, index) => {
               return(
               
                
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12  d-flex justify-content-center">
                        <div class="project-container">
                            <div class="overlay">
                                <Imgs imgUrl={items.imgUrl}/>
                                {/* <img src={items.imgUrl} class="img-fluid project-img" alt="" /> */}
                                <div class="project-heading-container">
                                  
                                    <h4 class="project-heading">{items.projectTitle}</h4>
                                </div>
                                <div class="buttons-container">
                                    <Buttons
                                    bClass="view" 
                                    btn_Url={items.btnVUrl}
                                    btn_Name={items.btnVName} /> 
                                    <Buttons 
                                    bClass="github"
                                    btn_Url={items.btnGUrl}
                                    btn_Name={items.btnGName} />
                         


                                    {/* <a href={items.btnVUrl}>
                                        <button class="btn view" type="button">{items.btnVName}</button>
                                    </a>

                                    <a href={items.btnGUrl}>
                                        <button class="btn github" type="button">{items.btnGName}</button>
                                    </a> */}
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

export default Section_1
