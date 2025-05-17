import React from "react";
import styled from 'styled-components';
import { Row, Col } from "antd";
import { ImgContainer60 } from "../components/ImgContainer";
import Data from "../data";
import photos from "../components/PhptoList";
import { CardContainer, ProjectElement, ProjectText, ProjectTitle } from "../components/CardsStyled";
import github from "../image/square-github-w.png";
import { slideInRWowAniClass } from "../components/WowAni";

// Styled Components
const CodeButton = styled.button`
    display: block;
    padding: 5px 15px;
    outline: none;
    background-color: rgba(0, 255, 255, 0.3);
    border-radius: 7px;
    margin-top: 1rem;
    font-size: 1rem;
    border: solid 1px rgba(100, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        display: block;
        border-radius: 7px;
        width: 0%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 255, 255, 1);
        transition: width 0.3s ease;
    }

    &:hover {
        border: solid 1px rgba(0, 255, 255, 0.8);
        box-shadow: 0 0 4px 3px rgba(100, 255, 255, 0.5);
        transform: scale(1.05);
    }

    &:hover::before {
        width: 100%;
    }

    span {
        color: #fbfbfb;
        font-size: 1rem;
        position: relative;
    }
`;

const Svg = styled.div`
    width: 1rem;
    display: inline-block;
    margin-left: 10px;
    transform: translateY(12%);

    &::before {
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
`;

const ProjectLink = styled.a`
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
    opacity: ${props => props.disabled ? 0.6 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const FrontEndCard = () => {
    const frontEndProjects = Data.find((sort) => sort.id === "FrontEnd")?.children || [];

    return (
        <CardContainer className={slideInRWowAniClass}>
            {frontEndProjects.map((project) => {
                const photoObj = photos.find((item) => item.id === project.photo);
                if (!photoObj) return null;

                const hasValidLink = project.link && project.link.length > 0;

                return (
                    <ProjectElement key={project.id}>
                        <Row gutter={[40, 20]}>
                            <Col lg={12} xs={24}>
                                <ProjectLink 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    disabled={!hasValidLink}
                                >
                                    <ImgContainer60 url={photoObj.url} />
                                </ProjectLink>
                                
                                {project.code && (
                                    <a href={project.code} target="_blank" rel="noreferrer">
                                        <CodeButton>
                                            <span>code</span>
                                            <Svg url={github} />
                                        </CodeButton>
                                    </a>
                                )}
                            </Col>
                            <Col lg={12} xs={24}>
                                <ProjectTitle>{project.id}</ProjectTitle>
                                <ProjectText>{project.p1}</ProjectText>
                                <ProjectText>{project.p2}</ProjectText>
                                <ProjectText>{project.intro}</ProjectText>
                            </Col>
                        </Row>
                    </ProjectElement>
                );
            })}
        </CardContainer>
    );
};

export default FrontEndCard;
