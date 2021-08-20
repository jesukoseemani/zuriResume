import React from 'react'
import styled from "styled-components"
import EducationPieces from './EducationPieces'
import SkillRange from './SkillRange'

function LeftMain() {
    return (
        <StyledLeft>
           <h1>Education</h1> 

           <EducationPieces 
           course="PostGraduate Studies in Computer Science" 
           school="ONDO UNIVERSITY" 
           date="2020 - 2021"
           />
            <EducationPieces 
           course="Bachelor of Science in Zoology" 
           school="ONDO UNIVERSITY" 
           date="2011 - 2016"
           />
            <EducationPieces 
           course="Science Class" 
           school="LA SALLE COLLEGE" 
           date="2006 - 2011"
           />

           <div className="empty"></div>

           <h1>Skills</h1> 

            <SkillRange 
            head="HTML"
            scale="95%"
            />
            <SkillRange 
            head="CSS"
            scale="90%"
            />
             <SkillRange 
            head="JAVASCRIPT"
            scale="85%"
            />
            <SkillRange 
            head="REACT"
            scale="80%"
            />
             <SkillRange 
            head="GIT"
            scale="75%"
            />
             <SkillRange 
            head="NODE"
            scale="50%"
            />
            

        </StyledLeft>
    )
}


const StyledLeft = styled.div`
flex-basis: 35%;
display: flex;
flex-direction: column;
/* justify-content: center; */
/* align-items: center; */
padding-left: 7rem;
border-right: 1px solid gray;
@media (max-width: 770px){
      
    padding-left: 2rem;
       }
h1{
    font-size: 2.8rem;
     font-family: 'Courier New', Courier, monospace;
     color: #0000f4;
     font-style: italic;
     margin-bottom: 1.5rem;
     margin-top: 1.5rem;
}

.empty{
    border-top: 1px solid gray;
}
`

export default LeftMain
