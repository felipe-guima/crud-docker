import { createGlobalStyle } from "styled-components";
import img from "./imagemDeFundo.png"

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
    
  }
  
  body {
    width: 100vw;
    height: 100vh;
    /* display: flex;
    justify-content: center; */
    background-color: #f2f2f2;
    background-image: url(${img});
    overflow-x: hidden;
  }
`;

export default Global;