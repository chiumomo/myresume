import React, { useEffect } from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import bgHeader from '../image/Header.png';
import '../index.css';
import scrollHide from "../components/ScrollHide";



const HeaderContainer = styled(Container)`
    display: flex;
    transform: translateY(-5px);
    justify-content: center;
    width:100vw;
    padding-top: 70%;
    background-position:center ;
    background-image: url(${bgHeader}) ;
    background-size: cover;
    outline: none;
    background-repeat: no-repeat;
`
export const Navigation =styled.div`
    display:block;
    width: 100%;
    position: fixed ;
    top: 0;
    ul{
        margin: 0 auto ;
        padding: 1rem 0 !important;
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
                color: #eea339;
                text-decoration:underline;
            }
            h4{
                white-space: nowrap !important;

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
                <Navigation className=" Nav show marginTop ">
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