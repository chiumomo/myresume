import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";


export const ImageContainer = styled(Container)`
        width: 100%;
        &::before{
            content: '';
            position: relative;
            display: block;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            overflow: hidden;
            background-image: url(${(props) => props.url});
        }
        
`
export const ImgContainer = styled(ImageContainer)`
        width: 100%;
        &:before{
            border-radius: 50px;
            border: solid 1px #fbfbfb;
            overflow: hidden;
            background-size: cover;
        }
        &:hover::before{
            border: solid 1px rgba(0,255,255,.8);
            box-shadow: 0 0 4px 3px  rgba(100,255,255,.5)  ;
            scale: 1.05;
        }
`




export const ImgContainer_50 = styled(ImgContainer)`
        &::before{
            padding-top: 50%;
        }

`

export const ImgContainer_60 = styled(ImgContainer)`
        &::before{
            padding-top: 60%;
        }

`

export const ImgContainer_75 = styled(ImgContainer)`
        &::before{
            padding-top: 75%;
        }

`
export const ImgContainer_100 = styled(ImgContainer)`
        &::before{
            padding-top: 100%;
        }

`