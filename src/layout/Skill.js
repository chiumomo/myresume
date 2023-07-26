import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import Leaf from "../image/leaf.png" 
import MovingLeaf from "../components/MovingLeaf";

const SkillContainer = styled(Container)`
    margin: 0 100px ;
    color: #056464;
    margin-bottom: 200px;
`

    
const SkillsValue =styled.div`
display: block;
margin-bottom: 4rem;

`

const SkillName=styled.div`
    display: inline-block;
    width: 300px;
    font-size: 36px;
    margin-right: 4rem;
    font-family: 'Noto Sans TC';
    text-align: right;
`
const SkillLeaf=styled.div`
    display:inline-block;
    width: ${(props) => props.wid * 60 }px;
    padding-top:25px;
    padding-bottom: 25px;
    text-align: left;
    background-image: url(${Leaf});
    background-size: contain;
    background-repeat: space ;
    background-position-x: left;
    transform: translateY(12px);
`



const MovingLeafR = styled(MovingLeaf)`
    animation-name:movingR;
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
            <SkillContainer>
                React,Figma放圖
            </SkillContainer>
        </div>
    )
}

export default Skill;