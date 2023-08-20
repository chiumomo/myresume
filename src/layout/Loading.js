import React, { useEffect, useState } from "react"
import { Container } from "../components/Container";
import styled from "styled-components";

const LoadingContainer = styled(Container)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 110vh;
    background-color: rgba(230,230,230,.9);
    z-index: 2;
    justify-content: center;
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
