import React from 'react'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import {Qca_Items} from '../../arrya_items/Qca_Items' 

export class QuickCoachingApp extends React.Component {
    render(){
        return(
            <div>
            <Section_1
                url="https://github.com/RMelvina/QuickCoachingApp.git"
                btnN="GITHUB"
                cBtn="github btn-size" />
           
            <Section_2
                text="I was in a team of four for this project that I did 
                    for my final paper for my course.    
                    The app was for the Da Vinci's Workshop company, the app was 
                    designed to help the user solve their problems, relieve their stress 
                    and achieve their goals."
                    line1="Firebase Authentication"
                    line2="Cloud Storage"
                    line3="Read and Write data to Firebase"
                    line4="Coordination with team"
                    line5="Professional Ethics"
                    line6="Dealing with client requirements that keeps on changing"
                    line7="Meeting deadlines"/>


              <Section_3
              arrayName={Qca_Items} />      
                    
        </div>
        )
    }
}

export default QuickCoachingApp
