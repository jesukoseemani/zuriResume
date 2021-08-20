import React from 'react'
import styled from "styled-components"

function SkillRange({head, scale}) {

    return (
        <StyledSkill>
            <div className="skillrange"> 
            <div className="skillrange_empty" style={{width: `${scale}`}}></div>
            </div>
            
             {/* <input type="range" className="skillrange"
             min="0" max="100" value={scale} /> */}
            
            <h4>{head}</h4>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
 width: 100%;
 margin-bottom: 2rem;
.skillrange{
    position: relative;
    width:90%;
    background-color: gray;
    height: 1rem;
    margin-bottom: .8rem;
  
 
 
.skillrange_empty{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0000a0;
    /* width: 40%; */
    height: 1rem;
    z-index:99;
    }
}


`

export default SkillRange
