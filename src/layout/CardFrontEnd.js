import React from "react";
import styled from 'styled-components';
import {Row,Col} from "antd";
import { ImgContainer_60 } from "../components/ImgContainer";
import Data from "../data";
import photos from "../components/PhptoList";
import { CardContainer, ProjectElement, ProjectText, ProjectTitle } from "../components/CardsStyled";
import github from "../image/square-github-w.png"

const CodeButton =styled.button`
    display: flex;
    padding: 5px 15px;
    outline: none;
    background-color: rgba(0,255,255,.3);
    border-radius: 10px;
    margin-top: 1rem;
    font-size: 1rem;
    justify-content: space-around;
    align-items: center;
    border: solid 1px  rgba(100,255,255,.5);
    &:hover{
            border: solid 1px rgba(0,255,255,.8);
            box-shadow: 0 0 4px 3px  rgba(100,255,255,.5)  ;
            scale: 1.05;
        }
    span{
        display: inline;
        color: #fff;
        align-self: center;
        font-size: 1rem;
    }
`
const Svg = styled.div`
    width: 1rem;
    display: inline-block;
    margin-left: 10px;
        
    &::before{
        content: '';
        position: relative;
        display: flex;
        padding-top: 100%;
        background-position: center;
        background-size: contain;
        background-image: url(${(props) => props.url});
        background-repeat: no-repeat;
        align-items: center;
    }
`

  const FrontEndCard = ()=>{
      
      return(
          <CardContainer>
            {Data.find((sort) => sort.id === "FrontEnd").children.map((project) => {
            const photoObj = photos.find((item) => item.id === project.photo);
            if (!photoObj) return null;
                return(
                    <ProjectElement key={project.id}>
                        <Row gutter={[40,40]}>
                            <Col lg={12}  xs={24}>
                                <a href={project.link} target="_blank">
                                    <ImgContainer_60 key={project.id} url={photoObj.url}>
                                    </ImgContainer_60>  
                                </a>
                                <a href={project.code} target="_blank">
                                    <CodeButton >
                                        <span>code</span>
                                        <Svg url={github}></Svg>
                                    </CodeButton>
                                </a>
                            </Col>
                            <Col lg={12}  xs={24}>
                                <ProjectTitle>
                                    {project.id}
                                </ProjectTitle>
                                <ProjectText>
                                    {project.p1}
                                </ProjectText>
                                <ProjectText >
                                    {project.p2}
                                </ProjectText>
                                <ProjectText >
                                    {project.intro}
                                </ProjectText>
                                
                            </Col>
                        </Row>    
                    </ProjectElement>
                     

                );

            })}
        </CardContainer>
        
    )
}

export default FrontEndCard;
