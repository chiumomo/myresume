import React from "react";
import {Row,Col} from "antd";
import { ImgContainer75 } from "../components/ImgContainer";
import Data from "../data";
import photos from "../components/PhptoList";
import { CardContainer, ProjectElement, ProjectText, ProjectTitle } from "../components/CardsStyled";
import { slideInLWowAniClass } from "../components/WowAni";



  const UIUXCard = ()=>{
      
      return(
          <CardContainer className={slideInLWowAniClass}>
            {Data.find((sort) => sort.id === "UIUX").children.map((project) => {
            const photoObj = photos.find((item) => item.id === project.photo);
            if (!photoObj) return null;
                return(
                    <ProjectElement key={project.id}>
                        <Row gutter={[40,20]}>
                            <Col lg={12}  xs={24}>
                                <a href={project.link} target="_blank">
                                    <ImgContainer75 key={project.id} url={photoObj.url}>
                                    </ImgContainer75>  
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

export default UIUXCard;
