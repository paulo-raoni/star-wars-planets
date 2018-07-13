import React from 'react'
import styled, { keyframes } from 'styled-components'

const blinking = keyframes`
    0% {
        color: yellow;
    }

    50% {
        color: #b4ff00;       
    }

    100% {
        color: yellow;
    }
`



const StyledDiv = styled.div`
    text-align: center;
    color: yellow;
    margin-bottom: 30px;

    > h1 {
        font-family: Starjout;
        font-size: 3em;
        margin: 0;
        animation: ${blinking} 2s ease-in-out infinite;
        word-spacing: .1em;         
    }

    > p {
        font-family: Geostar, cursive;
        font-weight: normal;
        font-size: 1em;
        margin: 0 0 20px;
    }

     @media(max-width: 500px) {
        & > h1 {    
            font-size:2em;
        } 

        & > p {
            font-size: .9em;
        }     
     }

     @media(max-width: 400px) {
        & > h1 {    
            font-size: 1.6em;
        } 

        & > p {
            font-size: .8em;
        }  
     }

`

const Header = () => {
    return (
        <StyledDiv>           
            <h1>STAR WARS PLANETS</h1>
            <p>Random planets with respective infos to make quiz games</p>
        </StyledDiv>
    )
}

export default Header