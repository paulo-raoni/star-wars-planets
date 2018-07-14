import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
   align-items: center;
    justify-content: center;
    border: 3px solid yellow;   
    background-color: transparent;
    max-width: 30em;
    height: 300px;
    margin: auto;
    text-align: center;
    color: red;
    font-family: 'Michroma', sans-serif;

    p {
        margin: auto;
    }
`


const FetchError = ({error}) => {
    return <StyledDiv>
                <h1>OOPS!</h1>
                <p> There is something wrong.</p>
                <p>Try again in a few moments.</p>
           </StyledDiv>
}

export default FetchError