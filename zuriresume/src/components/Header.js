import React from 'react'
import styled from "styled-components"
import ayo from "../img/ayo.jpeg"

function Header() {
    return (
        <StyledHeader>
        <StyledHeaderEmpty>

        </StyledHeaderEmpty>
         <StyledHero>
            
         <div className="image">
             <img src={ayo} alt="myphoto" srcset="" />
         </div>  
         
         
         <div className="name_content">
             <h2>KOSEEMANI OLOWOSUSI</h2>
             <h5>FRONTEND DEVELOPER</h5>
             <p><i>JavaScript,React,Nextjs</i></p>
         </div> 
        </StyledHero>
        </StyledHeader> 
    )
}
const StyledHeader = styled.div`
position: relative;
width: 100%;
`

const StyledHeaderEmpty = styled.div`
 position: relative;
 width:100%;
 
 height: 25rem;
 background: rgb(11,101,208);
 background: linear-gradient(90deg, rgba(11,101,208,1) 2%, rgba(132,6,185,1) 100%);
 border-radius:1rem;
 border-bottom-left-radius: 0rem;
 clip-path: polygon(100% 0, 100% 55%, 10% 89%, 0 100%, 0 0);
 `
 const StyledHero = styled.div`
   position: absolute;
   top: 1.3rem;
    width:100%;
    padding: 3rem 3rem;
    display: flex;
    align-items: center;
    z-index: 100;
    .image{
     

   img{
       width: 20rem;
       height: 20rem;
       object-fit: contain;
       border-top-right-radius: 6rem;
       z-index: 100
   }
    }

    .name_content{
     border: 1px solid #eaeaea;;
     margin-top: 5rem;
     width: 100%;
     height: 14.5rem;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding-left: 5rem;
     padding-top: 3rem; 
     background-color: #eaeaea;

     h2{
     font-size: 4rem;
     font-family: 'Courier New', Courier, monospace;
     color: #0000f4;
     }

     h5{
     font-size: 2rem;
     margin-bottom: .5rem;
     }

     p{
     font-size: 1.5rem;
     }
    }
  
`

export default Header
