import React from "react";
import { Container } from "../components/Container";
import styled, { keyframes } from 'styled-components';
//import { bounce } from 'react-animations';
import bgHeader from '../image/Header.png';

const HeaderContainer = styled(Container)`
    display: block;
    justify-content: center;
    width:100vw;
    padding-top: 70%;
    background-position:center;
    background-image: url(${bgHeader}) ;
    background-size: cover;
`
export const Navigation =styled.div`
    position: fixed ;
    left: 50%;
    top: 5%;
    width: 70vw;
    transform: translate(-50%,-25%);
    z-index: 2;
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        li{
            color: #FFF1BF;
            white-space: nowrap;
            padding: 1rem 1rem;
            &:hover{
                color: #8B8C8D;
            }
            &:active{
                color: #aee23e;
                text-decoration:underline;
            }
        }
    }

    font-family: 'Indie Flower', cursive;

`
 
const Header = ()=>{
    return(
        <div>
            <HeaderContainer>
                <Navigation>
                    <ul>
                        <a href="#aboutMe">
                            <li><h4>About me</h4></li>
                        </a>
                        <a href="#skills">
                            <li><h4>Skills</h4></li>
                        </a>
                        
                        <a href="#projects">
                            <li><h4>Projects</h4></li>
                        </a>
                        <a href="#contact">
                            <li><h4>Contact me</h4></li>
                        </a>
                        
                    </ul>
                </Navigation>

                {/* <img src="https://xsgames.co/randomusers/avatar.php?g=female"></img> */}
            </HeaderContainer>
        </div>
    )
}

export default Header;