import React from 'react'
import { Ca_Items } from '../../arrya_items/Ca_Items'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'

export class CookingApp extends React.Component {
    render() {
        return(
            <div>
            <Section_1 
            title="Cooking App"
            url="https://github.com/RMelvina/RecipesApp.git"
            btnN="Github"
            cBtn="github-btn"/>
           
            <Section_2 
            text="This project was for my UI/UX paper for my course.   
            This is a Recipes app where recipes saved in an array are
            displaying on to the screen."/>

            <Section_3 
            arrayName={Ca_Items}/>
        </div>
        )
    }
}

export default CookingApp
