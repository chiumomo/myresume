import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";


export const ImgContainer = styled(Container)`
        width: 100%;
        &::before{
            content: '';
            border-radius: 50px;
            border: solid 1px #fbfbfb;
            position: relative;
            display: block;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden;
            background-image: url(${(props) => props.url});
        }
        &:hover::before{
            border: solid 1px rgba(0,255,255,.8);
            box-shadow: 0 0 4px 3px  rgba(100,255,255,.5)  ;
        }
`

export const ImgContainer_65 = styled(ImgContainer)`
        &::before{
            padding-top: 65%;
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