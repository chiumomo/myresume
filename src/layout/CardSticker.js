import React from "react";
import styled from 'styled-components';
import {Row,Col} from "antd";
import { ImgContainer100 } from "../components/ImgContainer";
import Data from "../data";
import photos from "../components/PhptoList";
import { CardContainer, ProjectElement, ProjectText, ProjectTitle } from "../components/CardsStyled";
import { slideInRWowAniClass } from "../components/WowAni";



  const StickerCard = ()=>{
      
      return(
          <CardContainer className={slideInRWowAniClass}>
            {Data.find((sort) => sort.id === "Sticker").children.map((project) => {
            const photoObj = photos.find((item) => item.id === project.photo);
            if (!photoObj) return null;
                return(
                    <ProjectElement key={project.id}>
                        <Row gutter={[40,30]}>
                            <Col lg={12}  xs={24}>
                                <a href={project.link} target="_blank">
                                    <ImgContainer100 key={project.id} url={photoObj.url}>
                                    </ImgContainer100>  
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

export default StickerCard;
