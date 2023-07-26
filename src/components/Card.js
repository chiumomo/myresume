import React from "react";
import styled from 'styled-components';
import {Row,Col} from "antd";
import { ImgContainer, ImgContainer_65 } from "./ImgContainer";
import Data from "../data"

import Link from "react-dom";

import UIUX1 from "../image/UIUXdisney.png"
import UIUX2 from "../image/UIUXtablegame.png"
import FrontEnd1 from "../image/frontendStore1.png"
import FrontEnd2 from "../image/frontendStore2.png"
import FrontEnd3 from "../image/frontendStore3.png"
import Sticker1 from "../image/sticker1.png"
import Sticker2 from "../image/sticker2.png"
import Sticker3 from "../image/sticker3.png"



const CardContainer = styled.div`
    width: 100%;
    white-space: nowrap;
    position: relative;
`
const ProjectElement = styled.div`
    padding : 2rem 0;
`

const ProjectText = styled.div`
    font-weight: 300;
    font-size: 1rem;
    color: #fbfbfb;
    margin-bottom: .5rem;
    align-items: baseline;
`
const ProjectTitle = styled(ProjectText)`
    margin: .5rem 0;
    font-weight:500 ;

`

const ProjectCard = ()=>{
    return(
        <CardContainer>
            {Data.map((sort,key) => {
                return(
                    <div key={key}>
                        {sort.children.map((product,idx) =>{
                            const photo =  product.photo;
                            return(
                                <ProjectElement key={idx}>
                                <Row gutter={[40,40]}>
                                    <Col lg={12}  xs={24}>
                                        <a href={product.link} target="_blank">
                                            <ImgContainer_65 url={photo}>
                                            {/* <ImgContainer_65 url={UIUX2}> */}
                                            </ImgContainer_65>
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

export default ProjectCard;
