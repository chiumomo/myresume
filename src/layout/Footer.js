import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";

const FooterContainer = styled(Container)`
    display: block;
`

const Footer = ()=>{
    return(
        <div>
            <FooterContainer style={{backgroundColor:'#c00'}}>
                <div>This is Footer </div>
               
                {/* <FontAwesomeIcon icon="fa-brands fa-square-github" /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-square-behance" /> */}
            </FooterContainer>
        </div>
    )
}

export default Footer;