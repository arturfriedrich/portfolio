import React, { useState } from "react"
import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

// styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2A2438;
    justify-content: space-between;
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
    gap: 150px;
`

const TextBox = styled.div`
    width: 500px;
    height: 250px;
    background: #DBD8E3;
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

    &:hover {
        transform: scale(1.01);
        border: 2px solid #FFB703;
    }
`

const Title = styled.p`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.18em;
    margin: 0px;

    color: #DBD8E3;
`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #2A2438;
`

const Image = styled.img`
    width: 253.26px;
    height: 450px;
`

const Link = styled.a``

export default function AboutHome() {
    return (
            <Container>
                <Title>About</Title>
                <Group>
                    <Image src={require("../images/misc/peep-standing.png")} />
                    <TextBox>
                        <Text>
                            My name is Artúr Friedrich, I started learning web developemt  in February of 2021.<br /><br /> 
                            I write programs for 4 years not and I am currently a Computer Science student at the 
                            University of Győr, and want to get some experience working in the tech industry.
                        </Text>
                    </TextBox>
                </Group>
            </Container>
    )
}