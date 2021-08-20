import React from 'react'
import styled from "styled-components"
import LeftMain from './LeftMain'
import RightMain from './RightMain'

function MainBody() {
    return (
        <StyledMain>
            <LeftMain />
            <RightMain />
        </StyledMain>
    )
}

const StyledMain = styled.div`
margin-top: 3rem;
display: flex;
/* align-items: center; */
width: 100%;
`

export default MainBody
