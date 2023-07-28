import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import Cards from "./Card";
import Data from "../data";
import UIUXCard from "./CardUIUX";
import FrontEndCard from "./CardFrontEnd";
import StickerCard from "./CardSticker";
import { Link, Route, Routes } from "react-router-dom";





const ProjectContainer = styled(Container)`
    display: block;
    justify-content: center;
    border-radius: 100px;
    border:solid 4px black;
    background-color: #056464;
    margin: 0 10vw 50px 10vw ;
    padding: 40px 20px;
    white-space: wrap;
    font-size: 1rem;
    @media screen and (min-width: 490px){
        margin: 0 15vw  100px 15vw ;
        padding: 60px 40px;
        
    }
    @media screen and (min-width: 769px){
        margin: 0 10vw  200px 10vw ;
        padding: 60px 100px;
    }
`

const ProjectNav = styled(Link)`
    display: flex;
    justify-content: space-around;
    width: 100%;
    text-align: center;
    line-height: 2rem;
    `
const Span = styled.div`
        display: block;
        margin-bottom: 2rem;    
        width: 100%;
        height: 2px;
        background-color: rgba(255,255,255,.7);
`
const SortButton = styled.div`
        text-align: center;
        font-size: 1rem;
        color: #FFF1BF;
        text-decoration: none;
        /* width: 10vw; */
        display: inline-block;
        white-space: nowrap;
        padding: .5rem 1rem;
        &:hover{
            color: #4fffCC;
            text-shadow:5px 5px 10px rgba(0,0,0,.5) ;
        }
        &:active{
            color: #ffff;
            text-shadow:5px 5px 5px rgba(0,0,0,.8) ;

        }
        
`

const Project = ()=>{
    return(
        <div id="projects"  >
            <Title >Projects</Title>
            <ProjectContainer>
                <ProjectNav>
                    {Data.map((sort,key)=>{
                        return(
                            <Link to={`/${sort.id}`}>
                                <SortButton>
                                    {sort.id}
                                </SortButton>
                            </Link>
                        )
                    })}
                </ProjectNav>
                <Span/>
                <Routes>
                    <Route exact path="/" element={<Cards/>}>
                    </Route>
                    <Route path="/UIUX" element={<UIUXCard/>}>
                    </Route>
                    <Route path="/FrontEnd" element={<FrontEndCard/>}>
                    </Route>
                    <Route path="/Sticker" element={<StickerCard/>}>
                    </Route>
                </Routes>
            </ProjectContainer>

        </div>
    )
}

export default Project;