import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import Cards from "./Card";
import Data from "../data";
import UIUXCard from "./CardUIUX";
import FrontEndCard from "./CardFrontEnd";
import StickerCard from "./CardSticker";
import { Link, Route, Routes,useLocation } from "react-router-dom";
import { titleWowAniClass } from "../components/WowAni";



const ProjectContainer = styled(Container)`
    display: block;
    justify-content: center;
    border-radius: 3rem;
    border:solid 2px black;
    background-color: #056464;
    margin: 0 10vw 50px 10vw ;
    padding: 40px 20px;
    white-space: wrap;
    font-size: 1rem;
    @media screen and (min-width: 490px){
        margin: 0 15vw  100px 15vw ;
        padding: 60px 40px;
        border:solid 2px black;
        
    }
    @media screen and (min-width: 769px){
        margin: 0 10vw  200px 10vw ;
        padding: 60px 100px;
        border:solid 2px black;
    }
    @media screen and (min-width: 980px){
        border:solid 3px black;
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
        color: ${(props) => (props.isCurrentPath ? '#4fffCC' : '#FFF1BF')} ;
        text-decoration: none;
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
        &::after{
            display:${(props) => (props.isCurrentPath ? 'block' : 'none')};
            content: "";
            width: 140%;
            height: 2px;
            background-color: #4fffCC;
            transform: translate(-16%,.5rem);
            
            @media screen and (min-width: 769px){
                height: 4px;
            }
        }
        
`
const SortButtonBottom = styled(SortButton)`
    margin-top: -3rem;
    &::after{
            transform: translate(-16%,-4rem);
            
        }
`



const Project = ()=>{
    const location = useLocation();
    return(
        <div id="projects"  >
            <Title className={titleWowAniClass}>Projects</Title>
            <ProjectContainer>
                <ProjectNav>
                    {Data.map((sort,key)=>{
                        const isCurrentPath = location.pathname === `/${sort.id}`;
                        return(
                            <Link to={`/${sort.id}`}> 
                                <SortButton  isCurrentPath={isCurrentPath}>
                                    {sort.id}
                                </SortButton>
                            </Link>
                        )
                    })}
                </ProjectNav>
                <Span/>
                <Routes>
                    <Route exact path="/myresume" element={<Cards/>}>
                    </Route>
                    <Route path="/UIUX" element={<UIUXCard/>}>
                    </Route>
                    <Route path="/FrontEnd" element={<FrontEndCard/>}>
                    </Route>
                    <Route path="/Sticker" element={<StickerCard/>}>
                    </Route>
                </Routes>
                <Span/>
                <ProjectNav>
                    {Data.map((sort,key)=>{
                        const isCurrentPath = location.pathname === `/${sort.id}`;
                        return(
                            <Link to={`/${sort.id}`}> 
                                <SortButtonBottom  isCurrentPath={isCurrentPath}>
                                    {sort.id}
                                </SortButtonBottom>
                            </Link>
                        )
                    })}
                </ProjectNav>

            </ProjectContainer>

        </div>
    )
}

export default Project;