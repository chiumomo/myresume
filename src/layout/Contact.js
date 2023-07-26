import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";


const ContactContainer = styled(Container)`
    display: flex;
    justify-content: center;
    margin: 0 10vw;
    margin-bottom: 300px;
    
`

const Contact = ()=>{
    return(
        <div id="contact">
            <Title>Contacts</Title>
            <ContactContainer>


            </ContactContainer>     
        </div>
    )
}

export default Contact;