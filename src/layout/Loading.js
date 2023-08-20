import React, { useEffect, useState } from "react"
import { Container } from "../components/Container";
import styled from "styled-components";
import "animate.css";

const LoadingContainer = styled(Container)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 110vh;
    background-color: rgba(210,210,200,.95);
    z-index: 2;
    justify-content: center;
    align-content: center;
    transition: all .3s;
    
    h1{
        display: block;
        align-self:center ;
        font-family: 'Indie Flower','Noto Sans TC' ,
    monospace;;
    }

`

const Loading=(()=>{
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 8000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
    
    return(
        <div>
        {! isHidden &&(
            <LoadingContainer >
                <div class="text-container">
                    <h1 class=" flip-moving" >\ Loading /</h1>
                </div>
                <div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            </LoadingContainer>
                ) }
        </div>
    )
})

export default Loading;
