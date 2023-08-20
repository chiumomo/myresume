import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";

const FooterContainer = styled(Container)`
    display: block;
    text-align: center;
    background-color: #8B8C8D;
    color: #fbfbfb;
    font-size: .7rem;
    line-height: 1.5rem;
   
`

const Footer = ()=>{
    return(
        <div>
            <FooterContainer >
                    <p >Copyright © 2023 Cmomo.TW</p>
            </FooterContainer>
        </div>
    )
}

export default Footer;