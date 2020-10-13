import React, { Component } from 'react'
import Section_1_Reuse from './Section_1_Reuse'
import Skills_Section from './Skills_Section'
import ImgPortfolio from '../../images/img_photo.jpeg'
import {Skills_Section_Items} from '../arrya_items/Skills_Section_Items'

export class About extends Component {
    render() {
        return (
            
          <div>
        <Section_1_Reuse 
           imgUrl={ImgPortfolio}
           text="Hi, I'm Melvina
           I am a graduate in Software and Web Development and am looking for
            job opportunity in Software Development. I am a good team player.
            problem solver and I like new challenges.
            I would love to expend my current skills and learn new skills."/>
      
            <Skills_Section 
            arrayName={Skills_Section_Items} />
          </div>
            )
    }
}

export default About
