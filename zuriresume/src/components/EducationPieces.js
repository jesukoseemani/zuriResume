import React from 'react'
import styled from "styled-components"

function EducationPieces({course, school, date}) {

    // const course = "Master's degree in Economics"
    // const school = "OLDTOWN UNIVERSITY"
    // const date = "2012 - 2014"
    return (
        <StyledEdu>
            <h2>{course}</h2>
            <h4>{school}</h4>
            <p><i>{date}</i></p>
        </StyledEdu>
    )
}
const StyledEdu = styled.div`
line-height: 2rem;
margin-bottom: 1.5rem;

h2{
    font-weight: bold;
    font-size: 1.8rem;

}
`
export default EducationPieces
