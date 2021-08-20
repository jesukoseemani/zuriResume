import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  font-size: 10px;
  &::-webkit-scrollbar{
            width: .7rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color: #031121;
        }
    &::-webkit-scrollbar-track {
    background: white;
        }
}

body{
    font-family: 'lato', sans-serif;
   
}

a{
  text-decoration: none;
  font-size: 1.1rem;
}

ul {
  list-style: none;
  width:100%;
}
  
h3{
  font-size: 1.7rem;
  color: #333;
}

h4{
  font-size: 1.4rem;
  color: #333;
}

img{
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}

`;

export default GlobalStyles;