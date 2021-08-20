import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <StyledFooter>
            <div className="foot">
            <FontAwesomeIcon className="box_icon" icon={faPhoneAlt} size="2x" /> 
            <p>+2348107061526</p>
            </div>
            <div className="foot">
            <FontAwesomeIcon className="box_icon" icon={faEnvelope} size="2x" /> 
            <p>olowosusiayo@gmail.com</p>  
            </div>
            <div className="foot">
            <FontAwesomeIcon className="box_icon" icon={faGlobe} size="2x" /> 
            <p>www.okcodes.com</p>  
            </div>

        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
background: rgb(11,101,208);
background: linear-gradient(90deg, rgba(11,101,208,1) 2%, rgba(132,6,185,1) 100%);
width: 100%;
height: 6rem;
margin: 2rem 0rem;
border-bottom-left-radius: 3rem;
border-bottom-right-radius: 3rem;
display: flex;
align-items: center;
justify-content: space-around;

.foot{
    
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    margin-left: 2rem;
    color: white;
    font-size: 1.2rem;
}

.box_icon{
    color: #1a0033;
}
`

export default Footer
