import React, { useState } from "react"
import styled from "styled-components"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { Link as ReachRouterLink } from "react-router-dom"

// styled components
const Container = styled.div`
    display: flex;
    height: 75px;
    background-color: #2A2438;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 75px);
    background-color: #2A2438;
`

const Group = styled.div`
    margin-left: 100px;  
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 96px;
    line-height: 83px;
    margin: 0;
    margin-top: -75px;
    color: #DBD8E3;
`

const Accent = styled.span`
    position: relative;
    transition: 400ms;
    cursor: default;

    color: #DBD8E3;

    &:after{
        content: attr(data-hover);
        position: absolute;
        left: 0;
        bottom: 0;
        transform:rotateX(90deg);
        -webkit-transform:rotateX(90deg);
        -moz-transform:rotateX(90deg);
        -o-transform:rotateX(90deg);
        -ms-transform:rotateX(90deg);
        transition:300ms;
        opacity: 0;
        color: #0169af;
        height: 0;
    }

    &:hover:after{
        transform:rotateX(0deg);
        -webkit-transform:rotateX(0deg);
        -moz-transform:rotateX(0deg);
        -o-transform:rotateX(0deg);
        -ms-transform:rotateX(0deg);
        top: 0;
        opacity: 1;
        height: 100%;
    }

    &:hover{
        color: #FFB703 !important;
    }
`

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    margin: 0;
    cursor: default;

    color: #DBD8E3;
`

const Image = styled.img`
    width: 320px;
    height: 432px;
    margin-top: -75px;
    margin-right: 100px;
`

export default function Hero() {
    return (
        <ParallaxProvider>
            <Container>
                <Parallax translateX={["200px", '-200px']}>
                    <Group>
                        <Title>Hello.<br />I am <Accent>Artúr</Accent></Title>
                        <SubTitle>Student and Front End Developer</SubTitle>
                    </Group>
                </Parallax>
                <Parallax translateX={["-200px", '200px']}>
                    <Image src={require("../images/misc/peep.png")} />
                </Parallax>
            </Container>
        </ParallaxProvider>
    )
}

/*
@keyframes slideInLeft {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
    }

    animation: 1s ease-out 0s 1 slideInLeft;
*/