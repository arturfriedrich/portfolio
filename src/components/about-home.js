import React, { useState } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

// styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2A2438;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2A2438;
`

const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: auto;
    heigth: 100%;
    margin-bottom: 110px;
`

const TextBox = styled.div`
    width: 500px;
    height: 280px;
    background-color: #5C5470;
    border-radius: 25px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: 200ms;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    
    margin-left: 15rem;

    &:hover {
        transform: scale(1.01);
        border: 2px solid #FFB703;
        box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
    }
`

const Title = styled.p`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.1em;
    margin-top: 100px;

    color: #DBD8E3;
`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #DBD8E3;
`

const Image = styled.img`
    width: 281px;
    height: 500px;
`

const Link = styled.a``

export default function AboutHome() {
    return (
        <Container>
            {/* <Parallax translateX={["-800px", '20px']} easing='easeOutQuad' opacity={[0, 1]}> */}
                <Title>{/* About */}Rólam</Title>
            {/* </Parallax> */}
            <Group>
                {/* <Parallax translateX={["-300px", '150px']} easing='easeOutQuad' opacity={[0, 1]}> */}
                    <Image src={require("../images/misc/peep-standing.png")} />
                {/* </Parallax> */}
                {/* <Parallax translateX={["250px", '-20px']} easing='easeOutQuad' > */}
                    <TextBox>
                        <Text>
                            {/* My name is Artúr Friedrich, I started learning web developemt  in February of 2021.<br /><br /> 
                            I write programs for 4 years not and I am currently a Computer Science student at the 
                            University of Győr, and want to get some experience working in the tech industry. */}
                            A nevem Friedrich Artúr, több mint egy éve foglalkozok webfejlesztéssel, a tanulást 2021 februárjában kezdtem. <br /><br />
                            5 évvel ezelőtt írtam az első programomat egy gimnáziumi informatika órán. Jelenleg a Széchenyi István Egyetem hallgatója vagyok mérnökinformatikus szakon.
                        </Text>
                    </TextBox>
                {/* </Parallax> */}
            </Group>
        </Container>
    )
}