import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import Leaf from "../image/leaf.png" 
import MovingLeaf from "../components/MovingLeaf";
import { ImageContainer } from "../components/ImgContainer";

import htmlLogo from "../image/html-logo.png";

import reactLogo from "../image/react-logo2.png";
import jsLogo from "../image/Javascript-logo-basico.png";
import cssLogo from "../image/css-logo.png";
import scssLogo from "../image/sass.png";
import figmaLogo from "../image/figma-logo.png";

const Logo = [htmlLogo,cssLogo,jsLogo,scssLogo,reactLogo,figmaLogo];

const SkillContainer = styled(Container)`
    margin: 0 70px ;
    color: #056464;
    margin-bottom: 200px;
    @media screen and (min-width:660px){
        margin: 0 20px ;
        margin-bottom: 200px;

    }
    @media screen and (min-width:1200px){
        margin: 0 50px ;
        margin-bottom: 300px;
    }
`
    
const SkillsValue =styled.div`
    display: block;
    margin-bottom: 4rem;
`

const SkillName=styled.div`
    display: inline-block;
    width: 6rem;
    font-size: 1.5rem;
    margin-right: 2rem;
    font-family: 'Noto Sans TC';
    text-align: left;
    width: 100%;
    @media screen and (min-width:660px){
        width:  7rem;
        text-align: right;
    }
    @media screen and (min-width:1200px){
        width: 10rem;
        margin-right: 2rem;
        text-align: right;

    }
`
const SkillLeaf=styled.div`
    display:inline-block;
    width: ${(props) => props.wid * 37 }px;
    padding-top:10px;
    padding-bottom: 20px;
    text-align: left;
    background-image: url(${Leaf});
    background-size: contain;
    background-repeat: space ;
    background-position-x: left;
    transform: translateY(12px);
    @media screen and (min-width: 640px) {
        padding-top: 20px;
        width: ${(props) => props.wid * 50 }px;

    }
    @media screen and (min-width: 1000px) {
        padding-top: 30px;
        width: ${(props) => props.wid * 60 }px;

    }
`

const MovingLeafR = styled(MovingLeaf)`
    animation-name:movingR;
    animation-duration: 15s;

    @keyframes movingR {
    0% {
    rotate: -50deg;
    transform: translate(160%,100%);
    }
    50% {
    rotate: -30deg;
    transform: translate(130%,40%);
    }
    100% {
    rotate: -50deg;
    transform: translate(160%,100%);
    }
  }
`
const ToolContainer = styled(Container)`
    margin: 0 60px ;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    box-shadow: 0px 0px 10px rgba(255,255,250,.6);
    white-space: nowrap;
    justify-content: space-around;
    border-radius: 1rem;
    @media screen and (min-width:660px){
        flex-wrap: wrap;
        margin: 0 50px ;
        margin-bottom: 100px;
    }
    @media screen and (min-width:1200px){
        flex-wrap: nowrap;
        margin: 0 60px ;
        margin-bottom: 100px;
    }
`

const ToolImgContainer = styled(ImageContainer)`
    margin: 1rem 1rem;
    width: 30%;
    &::before{
        padding-top: 50%;
    }
    @media screen and (min-width:660px){
        width: 20%;

    }
    @media screen and (min-width:1200px){
        width: 16%;

    }
/* animation: name duration timing-function delay iteration-count direction fill-mode; */

`

const Skill =()=>{


    return(
        <div id="skills" >
            <Title>
                Skills
            </Title>
            <SkillContainer>
                <SkillsValue>
                    <SkillName>UI</SkillName>
                    <SkillLeaf wid={7} />
                </SkillsValue>
                <SkillsValue>
                    <SkillName>UX</SkillName>
                    <SkillLeaf wid={9}/>
                </SkillsValue>
                <SkillsValue>
                    <SkillName>Html</SkillName>
                    <SkillLeaf wid={10}></SkillLeaf>
                </SkillsValue>
                <SkillsValue>
                    <SkillName>Css,SASS</SkillName>
                    <SkillLeaf wid={10}></SkillLeaf>
                </SkillsValue>
                <SkillsValue>
                    <SkillName>JavaScript</SkillName>
                    <SkillLeaf wid={6}></SkillLeaf>
                </SkillsValue>
                <MovingLeafR/>
            </SkillContainer>
            <Title>
                Main tools
            </Title>
            <ToolContainer>
                {Logo.map((logo,idx)=>{
                    return(
                        <ToolImgContainer key={idx} url={logo} />
                    )
                })}
            </ToolContainer>
        </div>
    )
}

export default Skill;