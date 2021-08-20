import React from 'react'
import styled from "styled-components"

function WorkComponent({position , company , date , desc1, desc2, src}) {
    
    return (
        <StyledWork>
            <h3>{position}</h3>
            {src &&
             <img src={src} alt="logos" srcset="" />
            }
           
            <div className="content">
                <h6>{company}</h6>
                <h6 className="bold">{date}</h6>    
            </div>
            <div className="desc">
                <div className="desc-div"><span className="full_stop">o</span>{desc1}</div>
               
                <div className="desc-div"><span className="full_stop">o</span>{desc2}</div>
            </div>
        </StyledWork>
    )
}

const StyledWork = styled.div`

padding-left: 4rem;
width: 100%;
margin-bottom: 2rem;
h3{
    font-weight: bold;
    margin-bottom: 1rem;
}
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    h6{
        font-size: 1.2rem;
        padding-left: 0;
        font-weight: bold;
        color: #6f0000;
    }

    .bold{
        font-weight: bold;
        color: black;
    }
}

.desc{
   display: flex;
   flex-direction: column;
   font-size: 1.3rem;
   color: black;
   font-weight: bold;
   text-align: justify;
   .desc-div{
    margin: .5rem 0rem;
   }
    .full_stop{
       display: inline-block;
       font-size: 1.5rem;
       color: blue;
       padding-right: .5rem;
    }
}
`

export default WorkComponent
