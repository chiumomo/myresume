import React from "react";
import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title } from "../components/Title";
import ProjectCard from "../components/Card";
import Link from "antd/es/typography/Link";
import Data from "../data";




const ProjectContainer = styled(Container)`
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

const ProjectNavBar = styled.div`
    display: inline-block;
    justify-content: space-between;
    `
const SortButton = styled.div`
        text-align: center;
        padding: 0;
        font-size: 1rem;
        color: #FFF1BF;
        text-decoration: none;
        width: 14vw;
        /* display: inline; */
        white-space: nowrap;
        padding: 1rem 1rem;
        &:hover{
            color: #abbC8D;
        }
        &:active{
            color: #CEEBDB;
            text-decoration:underline;
        }
        
`

const Project = ()=>{
    return(
        <div id="projects"  >
            <Title >Projects</Title>
            <ProjectContainer>
                {Data.map((sort,key)=>{
                    return(
                        <ProjectNavBar>
                                <Link >
                                    <SortButton>
                                        {sort.id}
                                    </SortButton>
                                </Link>
                        </ProjectNavBar>
                    )
                })}
                <ProjectCard/>
            </ProjectContainer>

        </div>
    )
}

export default Project;