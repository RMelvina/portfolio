import React, { Component } from 'react'
import Section_1 from './Section_1'
import {Project_Section_Items} from '../arrya_items/ Project_Section_Items'

export class Projects extends Component {
    render() {
        return (
           
           <Section_1
            arryaName={Project_Section_Items}
            />
        )
    }
}

export default Projects
