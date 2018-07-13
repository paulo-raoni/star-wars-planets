import  React from 'react';
import styled, {keyframes} from 'styled-components'

const appearing = keyframes`
    0% {   
        word-spacing: -50px;
    }

    100% {
        letter-spacing: 2px;
    }
`

const scaling = keyframes`
    0% {
        transform: scale(.1)
    }

    50% {
        transform: scale(1.5)
    }

    100% {
        transform: scale(.1)
    }
`



const StyledDiv = styled.div`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
    > h4{
        color: ${() => ['blue', 'red', 'yellow', 'green', 'orange', 'purple'][Math.floor(Math.random() * 6 )]};
        text-shadow: 1px 1px 1px ${() => ['white', '#c4a5ff', '#bfd7ff', '#fdffaf', '#ffd3b5'][Math.floor(Math.random() * 5 )]};
        animation: ${appearing} .5s ;

        > span {
            color: lightgray;
        }
    }   
    > p {
        color: white;
        margin-bottom: 20px;
    }

    
    > div {            
        img {   
            max-width: 30px;
            animation: ${scaling} 1s ease-in-out infinite;
        }
    }

   
`


const Loading = ({quote}) => {
    return (
     <StyledDiv className='loading'>
        <h4>
            "{quote.quote}" <span> - {quote.author}</span>
        </h4>
        <div><img src={require('.././img/Blue_Lightsaber_icon.png')} alt='Loading'/></div>
        <p>Loading...</p>  
        
    </StyledDiv>
    )
}

export default Loading