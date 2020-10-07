import React, { Component } from 'react'
import { Adas_Items } from '../../arrya_items/Adas_Items'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'

export class Adas extends Component {
    render() {
        return (
            <div>
                <Section_1
                title="Alzheimer's Disease Assessment Scale Apps"
                url="https://github.com/timeoutmode/ADAS.git"
                name="Github"
                cBtn="github-btn"/>

                <Section_2
                text="I was in a team of six for this project, this app was designed 
                to help the assessor to eliminate the need for paper management system.
                The app has 20 unstructured questions used in assessing Alzheimer’s Disease."
                line1="Firebase Authentication and data management with Firebase SDK"
                line2="Places API"
                line3="Speech-To-Text API"
                line4="Coordination with team"
                line5="Github" />
                
                <Section_3
                arryaName={Adas_Items} />
            </div>
        )
    }
}

export default Adas
