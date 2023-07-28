import React from "react";
import styled from 'styled-components';
import {Row,Col} from "antd";
import { ImgContainer_60 } from "../components/ImgContainer";
import Data from "../data";
import photos from "../components/PhptoList";
import { CardContainer, ProjectElement, ProjectText, ProjectTitle } from "../components/CardsStyled";



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
