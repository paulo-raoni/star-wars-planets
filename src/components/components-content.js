import React from 'react'
import { PropTypes } from 'prop-types';
import InfoBox from './info-box'
import NextButton from './next-button';
import styled from 'styled-components'
import Header from './header';
import Loading from './loading';
import Signature from './signature';

const ComponentsContainer = styled.div`
    margin: 2% 5% 0;
    
    @media(max-width: 500px) {
        margin: 5% 10%;
    }
`

const ComponentsContent = ({
    planetInfo, 
    isFetching,
    nextPlanet,
    getQuotes
}) => {
    return (
        
        <ComponentsContainer className="Components">
            <Header></Header>
            {isFetching === true && 
                <Loading quote={getQuotes()} ></Loading>
            }
            {!!planetInfo && !isFetching && <InfoBox planetInfo={planetInfo}/>}           
            {<NextButton isDisabled={isFetching} nextPlanet={nextPlanet}/>}
            {<Signature></Signature>}
        </ComponentsContainer>
    )
}

ComponentsContent.propTypes = {
    planetInfo: PropTypes.object, 
    isFetching: PropTypes.bool.isRequired,
    nextPlanet: PropTypes.func.isRequired
}


export default ComponentsContent