import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import MovingLeaf from "../components/MovingLeaf"


const AboutContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    margin: 0 10vw;
    height: 60vh;
    margin-bottom: 200px;
    
`
const TextCard = styled.div`
    width: 30rem;
    margin: 0 1rem;
    display: inline-block;
    font-family: 'Indie Flower', Arial, sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    ul{
        line-height: 1.5rem;
        padding-left: 1rem;
        font-size: 1rem;
        font-family: 'Times New Roman', Times, serif;
        li{
            list-style: disc;
        }
    }
    
`
const ImgCard = styled.div`
    width:30rem;
    display: inline-block;
    margin: 2rem 0;
    &:after{
        //個人照
        content: '';
        position: absolute;
        width: 20%;
        border-radius: 180px;
        padding-top:28%;
        background-color: #ccc;
        left: 50%;
        transform: translate(-50%,0);
        outline: solid 2px black;

    }
    &:before{
        //外框
        content:'';
        position: absolute;
        width: 22%;
        border-radius: 180px;
        padding-top:32%;
        border: dashed 3px white;
        left: 50%;
        transform: translate(-50%,-6%);
    }
`
const  MovingLeafL = styled(MovingLeaf)`
    animation-name:movingL ;
    @keyframes movingL {
    0% {
    rotate: 15deg;
    transform: translate(-65%,95%);
    }
    50% {
    rotate: -20deg;
    transform: translate(-50%,65%);
    }
    100% {
    rotate: 15deg;
    transform: translate(-65%,95%);
    }
  }
`

const AboutMe = ()=>{

    return(
        <div id="aboutMe" >
            <Title>
                About me
            </Title>
            <AboutContainer>
                <TextCard style={{paddingTop:'8%'}}>
                    Used to be
                    <ul>
                        <li>an environmental engineer.</li>
                        <li>a project manager.</li>
                    </ul>
                </TextCard>
                <ImgCard>
                </ImgCard>
                <TextCard style={{paddingTop:'20%'}} >
                    Going to be
                    <ul>
                        <li>an UI designer.</li>
                        <li>an UX designer.</li>
                        <li>a front-end Developer.</li>
                    </ul>
                </TextCard>
                <MovingLeafL/>
            </AboutContainer>
        </div>
    )
}

export default AboutMe;