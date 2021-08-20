import React from 'react'
import styled from "styled-components"
import WorkComponent from './WorkComponent'
import download from "../img/download.jpg"

function RightMain() {
    return (
        <StyledRight>
           <h1>Profile</h1>
           <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>

           <div className="line"></div>

           <h1>Work Experience</h1>
           <WorkComponent 
             position = "FrontEnd Developer(intern)"
             company = "ZURI/HNG/i4g(https://zuri.team/)"
             src={download}
             date = "2021 - tILL Date"
             desc1 = "Mastering technical skills,Gaining essential background knowledge,Perfecting interpersonal skills(soft skills),Building a network of contacts. Bolstering my resume."
             desc2 = "Prospect for new business opportunities by making cold calls and sending emails.Prospect for new business opportunities by making cold calls and sending emails."
           />

           <WorkComponent 
             position = "FrontEnd Developer"
             company = "NUGI TECHNOLOGIES"
             date = "2019 - 20"
             desc1 = "Prospect for new business opportunities by making cold calls and sending emails.Prospect for new business opportunities by making cold calls and sending emails."
             desc2 = "Prospect for new business opportunities by making cold calls and sending emails.Prospect for new business opportunities by making cold calls and sending emails."
           />
            <WorkComponent 
             position = "FrontEnd Developer"
             company = "SHRINQ"
             date = "2018 - 19"
             desc1 = "Prospect for new business opportunities by making cold calls and sending emails.Prospect for new business opportunities by making cold calls and sending emails."
             desc2 = "Prospect for new business opportunities by making cold calls and sending emails.Prospect for new business opportunities by making cold calls and sending emails."
           />
        </StyledRight>
    )
}

const StyledRight = styled.div`
flex: 1;
display: flex;
flex-direction: column;

h1{
    font-size: 2.8rem;
     font-family: 'Courier New', Courier, monospace;
     color: #0000f4;
     font-style: italic;
     margin-bottom: 1.5rem;
     margin-top: 1.8rem;
     padding-left: 4rem;
}

p{
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    width:90%;
    text-align: justify;
    font-weight: 600;
    margin-bottom: 2.5rem;
    padding-left: 4rem;
    color: #525252;
}

.line{
    border-top: 1px solid gray;
}
`

export default RightMain
