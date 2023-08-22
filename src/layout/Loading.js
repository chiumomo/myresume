import React, { useEffect, useState } from "react"
import { Container } from "../components/Container";
import styled from "styled-components";
import "animate.css";
import { disableScroll } from "../components/ScrollHide";

const LoadingContainer = styled(Container)`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(210,210,200,1);
    z-index: ${props => props.isHidden ? '0' : '2'};
    justify-content: center;
    align-content: center;
    transition: transform 1s ease, opacity 1s linear;
    transform: translateY(${props => props.isHidden ? '-100vh' : '0'});
    opacity: ${props => props.isHidden ? '0' : '1'};
    
    h1{
        display: block;
        align-self:center ;
        font-family: 'Indie Flower','Noto Sans TC' ,
    monospace;;
    }

`
// 禁止捲動
function enableScroll() {
    const loadingContainer = document.getElementById('LoadingContainer');
    if (loadingContainer) {
       loadingContainer.style.overflow = 'auto';
    }
 }


const Loading=(()=>{
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 10000);

    return () => {
        clearTimeout(timer);
      };
    }, []);
    
    if (isHidden){
        document.body.style.overflow = 'auto';
    }else{
        document.body.style.overflow = 'none';
    };
      

    return(
        <div>
            <LoadingContainer isHidden={isHidden} >
                <div class="text-container">
                    <h1 class=" leftRight-moving" >\ Loading /</h1>
                </div>
                <div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            </LoadingContainer>
                
        </div>
    )
})

export default Loading;
