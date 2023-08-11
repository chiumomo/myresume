import React, { useEffect } from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import bgHeader from '../image/Header.png';
import '../index.css';
import scrollHide from "../components/ScrollHide";



const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: center;
    width:100vw;
    padding-top: 72%;
    background-position:center;
    background-image: url(${bgHeader}) ;
    background-size: cover;
`
export const Navigation =styled.div`
    display:block;
    width: 100%;
    position: fixed ;
    top: 0;
    ul{
        margin: 0 auto ;
        @media screen and (min-width:579px){
            margin: 0 10vw ;
        }
        padding: 0;
        display: flex;
        list-style-type: none;
        justify-content: space-around;
        li{
            margin: 0 1.5rem;
        }
        a{
            color: #FFF1BF;
            line-height: 2rem;
            white-space: nowrap;
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
    useEffect(()=>{
        scrollHide();
    },[])
    return(
        <div>
            <HeaderContainer >
                <Navigation className=" Nav show  ">
                    <ul>
                        <li>
                            <a href="#aboutMe">
                                <h4>About me</h4>
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <h4>Skills</h4>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <h4>Projects</h4>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <h4>Contact me</h4>
                            </a>
                        </li>
                        
                    </ul>
                </Navigation>
                {/* <img src="https://xsgames.co/randomusers/avatar.php?g=female"></img> */}
            </HeaderContainer>
        </div>
    )
}

export default Header;