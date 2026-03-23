import React from "react";
import styled from 'styled-components';
import {Row,Col} from "antd";
import { ImgContainer75 } from "../components/ImgContainer";
import Data from "../data"
import photos from "../components/PhptoList";
import { CardContainer, ProjectElement, ProjectText, ProjectTitle } from "../components/CardsStyled";
import { slideInLWowAniClass } from "../components/WowAni";


const Cards = ()=>{
    return(
        <CardContainer className={slideInLWowAniClass}>
            {Data.map((sort,key) => {
                return(
                    <div key={key}>
                        {sort.children.map((product,idx) =>{
                            const photoObj = photos.find((item) => item.id === product.photo);
                            if (!photoObj) return null;
                            const hasValidLink = product.link.length > 0;

                            return(
                                <ProjectElement key={idx}>
                                <Row gutter={[40,10]}>
                                    <Col lg={12}  xs={24}>
                                        <a href={product.link} target="_blank" rel="noreferrer"
                                        disabled={!hasValidLink}
                                        >
                                            <ImgContainer75 
                                            key={idx} url={photoObj.url}>
                                            </ImgContainer75>  
                                        </a>
                                    </Col>
                                    <Col lg={12}  xs={24}>
                                        <ProjectTitle>
                                            {product.id}
                                        </ProjectTitle>
                                        <ProjectText>
                                            {product.p1}
                                        </ProjectText>
                                        <ProjectText >
                                            {product.p2}
                                        </ProjectText>
                                        <ProjectText >
                                            {product.intro}
                                        </ProjectText>
                                    </Col>
                                </Row>    
                                </ProjectElement>
                            )
                        })}
                    </div>

                );

            })}
        </CardContainer>
        
    )
}

export default Cards;
