import React from 'react'
import styled from "styled-components"
import Footer from '../components/Footer'
import Header from "../components/Header"
import MainBody from '../components/MainBody'

function homePage() {
    return (
        <StyledHomepage>
         <Header/>  

         <MainBody />

         <Footer />
        </StyledHomepage>
    )
}

const StyledHomepage = styled.div`

width: 100%;
max-width: 120rem;
border-radius: 1rem;
margin: 0 auto;
`

export default homePage
