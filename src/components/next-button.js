import React from 'react'
import { PropTypes } from 'prop-types';
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
  > button {
    width: 100px;
    height: 50px;
    color: white;
    font-family: Geostar, cursive;
    background-color: #040422;
    border: 2px solid white; 
    transition: .1s all;
    &:hover {
      cursor: pointer;
      background-color: #0d0d1d;
      transform: scale(1.1);
    }
  }

`


const NextButton = ({isDisabled, nextPlanet}) => {
  return (
    <StyledDiv className='Next'>
        <button disabled={isDisabled} onClick={nextPlanet}>NEXT</button>
    </StyledDiv>
  )
}

NextButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    nextPlanet: PropTypes.func.isRequired
}

export default NextButton