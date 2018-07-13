import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
     margin: auto;
     text-align: center;
     margin-top: 3.2em;
     font-size: .9em;
     position: fixed;
     bottom: 0.5em;
     right: 1.5em;
    > div {
       
        > p:nth-child(1) {
            color: #452828;
            text-shadow: 0.6px 0.9px 1px #ff3a3a;
            font-family: Starjout, cursive;
            margin: 0;
            > span {
                display: inline-block;
                padding: 0 5px;
                img {                    
                    max-width: 20px;
                }
            }   
        }

        > p:nth-child(2) {
            color: black;
            text-shadow: 0.6px 0.9px 1.2px white;
            margin: 0;
            a {
                color: black;
                text-decoration: unset;
                padding-left: 5px;
            }
            &:hover {
                > a {
                    text-decoration: underline;
                }
            }
        }
        
    }

    @media(max-width: 500px) {
        font-size: .7em;
    }

`

const Signature = () => {
    return (
        <StyledDiv>
             <div>
                <p>Made With 
                    <span>
                        <img src={require(".././img/coffee.png")} alt="coffee" />
                    </span> and 
                    <span>
                        <img src={require(".././img/music_emoji.png")}  alt="learning"/>
                    </span>
                </p>  
                <p>COPYRIGHT © 2018 by  
                    <a href="https://github.com/paulo-raoni">
                        <span>Paulo Raoni</span>
                    </a>
                </p> 
            </div>   
            
        </StyledDiv>
    )
}

export default Signature