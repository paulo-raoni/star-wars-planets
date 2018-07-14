import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

const borderMoving = keyframes`
    0% {
        box-shadow: 1px 1px 2px #d9d960;  
    }

    50% {
        box-shadow: 2px 2px 60px #d9d960, -2px -2px 60px #d9d960;  
    }

    100% {
        box-shadow: 1px 1px 2px #d9d960;
    }

`

const PlanetBox = styled.div`
    align-items: center;
    justify-content: center;
    border: 1px solid yellow;   
    background-color: transparent;
    max-width: 30em;
    height: 300px;
    margin: auto;
    animation: ${borderMoving} 5s ease infinite;
    overflow: auto;
    > div {
        border: 2px solid yellow;   
        background-color: transparent;
        box-sizing: border-box;
        height: 300px;
        box-shadow: inset 3px 3px 10px #d9d960, inset -3px -3px 10px #d9d960;
        background: rgba(34,34,34,0.80);
    }

    @media(max-width: 500px) {
        &, & > div {
            height: 280px;
        }
    }

`
const PlanetHead = styled.div`
    text-align: center;
    border-bottom: 2px solid yellow;
    box-shadow: inset 3px 3px 10px #d9d960, inset -3px -3px 10px #d9d960;
    padding-top: 1px;

    > h2 {
        color: yellow;
        font-weight: bold;
        font-family: 'Michroma',sans-serif;
        font-size: 1.6em;
        margin: 0;
        padding: .6em;
        
        @media(max-width: 500px) {
            font-size: 1.2em;
        }
    }

  

`
const PlanetBody = styled.div`
    text-align: center;
    color: red;
    font-family: 'Michroma', sans-serif;
    

    > ul {
        list-style: none;
        text-align: left;
        padding: 0 40px 5px; 
        li {
            margin: 10px 0;
        }       
        span {
            color: white;
        }
    }

    > span {
        word-spacing: 3px;
        display: block;
        margin: 5px 0;
    }

    @media(max-width: 500px) {
        font-size: .8em;
    }

    
    @media(max-width: 400px) {
        font-size: .7em;
    }


`

const InfoBox = ({planetInfo}) => {
  return (
    <PlanetBox className="planet-info-box">
        <div>
            <PlanetHead>
                <h2>{planetInfo.name.toUpperCase()}</h2>
            </PlanetHead>
            <PlanetBody>
                <ul>
                    <li>POPULATION: <span>{planetInfo.population.toUpperCase()}</span></li>
                    <li>CLIMATE: <span>{planetInfo.climate.toUpperCase()}</span></li>
                    <li>TERRAIN: <span>{planetInfo.terrain.toUpperCase()}</span></li>
                </ul>
                <span>
                    {
                        `FEATURES IN 
                        ${planetInfo.films === 0 ? 
                            "NO FILMS" : 
                            (planetInfo.films === 1 ? (planetInfo.films + " FILM") : planetInfo.films + " FILMS")} `
                    }
                </span>
                
            </PlanetBody>
        </div>
    </PlanetBox>
  )
}


InfoBox.propTypes = {
    planetInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        population: PropTypes.string.isRequired,
        climate: PropTypes.string.isRequired,
        terrain: PropTypes.string.isRequired,
        films: PropTypes.number.isRequired
    })
}

export default InfoBox