import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import "animate.css";
import { usePageLoaded } from "../hooks/usePageLoaded";

const TRANSITION_MS = 1000; // 與 CSS transition 時長一致

const LoadingContainer = styled(Container)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(210,210,200,1);
    /* isGone 才真正壓到底層，確保動畫期間仍蓋住內容 */
    z-index: ${props => props.isGone ? '-1' : '2'};
    justify-content: center;
    align-content: center;
    pointer-events: ${props => props.isAnimating ? 'none' : 'auto'};
    transition: transform ${TRANSITION_MS}ms ease, opacity ${TRANSITION_MS}ms linear;
    transform: translateY(${props => props.isAnimating ? '-100vh' : '0'});
    opacity: ${props => props.isAnimating ? '0' : '1'};

    h1{
        display: block;
        align-self: center;
        font-family: 'Indie Flower', 'Noto Sans TC', monospace;
    }
`;

const Loading = () => {
    const isLoaded = usePageLoaded();
    // 控制動畫開始
    const [isAnimating, setIsAnimating] = useState(false);
    // 控制元件真正退場（z-index 降下）
    const [isGone, setIsGone] = useState(false);

    // 鎖定捲動
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'auto'; };
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        // 1. 恢復捲動 & 開始播向上 fade-out 動畫
        document.body.style.overflow = 'auto';
        setIsAnimating(true);

        // 2. 等動畫跑完再把 z-index 降到 -1
        const timer = setTimeout(() => setIsGone(true), TRANSITION_MS);
        return () => clearTimeout(timer);
    }, [isLoaded]);

    return (
        <LoadingContainer isAnimating={isAnimating} isGone={isGone}>
            <div className="text-container">
                <h1 className="leftRight-moving">\ Loading /</h1>
            </div>
            <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>
        </LoadingContainer>
    );
};

export default Loading;
