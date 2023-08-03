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
            
            <FooterContainer>
                <div>Copyright © 2023 Cmomo.TW</div>
            </FooterContainer>
        </div>
    )
}

export default Footer;