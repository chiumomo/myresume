import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import { Row,Col } from "antd";

import github from "../image/square-github-w.png"
import behance from "../image/square-behance-w.png"


const linkGH = "https://github.com/chiumomo/chiumomo.github.io";
const linkBH = "https://www.behance.net/00c32f79";

const ContactContainer = styled(Container)`
    margin-bottom: 8rem;
    width: 60vw;
    border: 4px dashed rgba(200,200,200,.5);
    box-shadow: 0 0 0 4px rgb(30,30,30);
    border-radius: 20px;
    background-color: rgb(50,50,50);
    padding: 2rem ;
    text-shadow: 2px 2px 5px rgba(200,200,200,.5);
`

const SvgContainer = styled.div`
    padding: 15px;
    width: 2rem;
    margin-right: 0;
    &::before{
        content: '';
        position: relative;
        display: block;
        padding-top: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${(props) => props.url});
    }
    &:hover:before{
        box-shadow: 0px 0px 20px rgba(150,200,150,.5);
}
`
const ContactTitle = styled(Title)`
    font-size: 2rem;
    justify-content: end;
    margin: 0;
    margin-right: 2rem;
    white-space: nowrap;
`
const ContactEmail = styled(Title)`
    font-size: 1.2rem;
    font-weight: 400;
    vertical-align: middle;
    margin: 1rem 0;
    font-family: sans-serif;
    display: flex;
    flex-wrap: wrap flex-start;
`

const Contact = ()=>{
    return(
        <div id="contact">
            <ContactContainer>
                <Row gutter={[20,20]}>
                    <Col lg={14} md={14} sm={24} xs={24}>
                        <ContactTitle>Contact me</ContactTitle>
                    </Col>
                    <Col lg={3} md={5} sm={3} xs={4}>
                        <a href={linkGH} target="_blank">
                        <SvgContainer url={github}></SvgContainer>
                        </a>
                    </Col>
                    <Col lg={3} md={5} sm={3} xs={4}>
                       <a href={linkBH} target="_blank">
                            <SvgContainer url={behance}></SvgContainer>
                       </a>
                    </Col>
                </Row>
                <Row>
                    <Col lg={24}>
                        <ContactEmail>
                            Email：q10110144kh@gmail.com
                        </ContactEmail>
                    </Col>
                </Row>
            </ContactContainer>     
        </div>
    )
}

export default Contact;