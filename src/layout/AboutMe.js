import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import MovingLeaf from "../components/MovingLeaf"
import { Row,Col } from "antd";

import { divWowAniClass, titleWowAniClass } from "../components/WowAni";


//取得隨機數字
function getRandomNum(){
    return Math.floor(Math.random() *7) + 1;
}

const AboutContainer = styled(Container)`
    margin: 2rem 2rem 3rem 2rem;
    overflow: visible;
    @media screen and (min-width: 389px){
        margin: 2rem 2rem 6rem 6rem;
    }
    @media screen and (min-width: 579px){
        margin: 2rem 2rem 7rem 7rem;
    }
    @media screen and (min-width: 980px){
        margin: 2rem 2rem 4rem 2rem;

    }
    @media screen and (min-width: 1200px){
        margin: 3rem 3rem 9rem 3rem;
        
    }
    
`
const TextCard = styled.div`
    /* width: 30rem; */
    margin: 0 1rem;
    display: inline-block;
    font-family: Arial, sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2rem;
    padding-top:0% ;
    margin-top: 0%;
    margin-bottom: 5%;
    ul{
        line-height: 1.5rem;
        padding-left: 1rem;
        font-size: 1rem;
        font-family: 'Times New Roman', Times, serif;
        li{
            list-style: disc;
        }
    }
    @media screen and (min-width: 579px){
        padding-top:0%;
        margin-top: -10%;
    }
    @media screen and (min-width: 990px){
        padding-top:5% ;
        margin-top: 0%;

    }
    
`
const ImgCard = styled.div`

&:after{
    //個人照
    content: '';
    position: absolute;
    width: 70%;
    border-radius: 180px;
    padding-top:100%;
    left: 50%;
    transform: translate(-50%,0);
    outline: solid 1px wheat;
    transition: background-image .9s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    background-image: url(${(props) => props.url});
    }
    &:before{
        //外框
        content:'';
        position: absolute;
        width: 78%;
        border-radius: 180px;
        padding-top:112%;
        border: dashed 3px white;
        left: 50%;
        transform: translate(-50%,-6%);
    }
`
const  MovingLeafL = styled(MovingLeaf)`
    animation-name:movingL ;
    animation-duration: 12s;

    @keyframes movingL {
  
    0% {
    rotate: 15deg;
    transform: translate(-65%,0%);
    }
    50% {
    rotate: -20deg;
    transform: translate(-20%,-5%);
    transform:scale(0.7);

    }
    100% {
    rotate: 15deg;
    transform: translate(-65%,0%);
    }
  }
`

const AboutMe = ()=>{

    const [imagePath,setImagePath] = useState('');

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const randomNum = getRandomNum();
            const newPath = require(`../image/avatars/0${randomNum}.jpg`);
            setImagePath(newPath);
        },4000)

        return () => {
            clearInterval(intervalId);
        };
                
    },[]);

    return(
        <div id="aboutMe" >
            <Title className={titleWowAniClass}>
                About me
            </Title>
            <AboutContainer className={divWowAniClass}>
                <Row gutter={[20,20]}>
                    <Col lg={8} md={12} sm={12} xs={24}>
                        <TextCard>
                            Used to be
                            <ul>
                                <li>an environmental engineer.</li>
                                <li>a project manager.</li>
                            </ul>
                        </TextCard>
                    </Col>
                    <Col lg={8} md={10} sm={10} xs={10}>
                        <ImgCard url={imagePath}>
                        </ImgCard>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={14}>
                        <TextCard style={{paddingTop:'20%'}} >
                            Going to be
                            <ul>
                                <li>an UI designer.</li>
                                <li>an UX designer.</li>
                                <li>a front-end Developer.</li>
                            </ul>
                        </TextCard>
                    </Col>
                </Row>
                <MovingLeafL />
            </AboutContainer>
        </div>
    )
}

export default AboutMe;