import React, { useState } from "react"
import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

// styled components
const Container = styled.div`
    display: flex;
    background-color: #2A2438;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 75px);
    background-color: #2A2438;
`

const Group = styled.div`
    width: 500px;
    height: 350px;
    display: flex;

    &:last-pf-type {
        background: #DBD8E3;
        border-radius: 25px;
    }
`

const Title = styled.p`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.18em;

    color: #DBD8E3;
`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #2A2438;
`

const Image = styled.img`
    width: 242px;
    height: 430px;
`

const Link = styled.a``

export default function AboutHome() {
    return (
            <Container>
                <Title>About</Title>
                <Image src={require("../images/misc/peep-standing.png")} />
                <Group>
                    <Text>
                        My name is Artúr Friedrich, I started learning web developemt  in February of 2021. 
                        I write programs for 4 years not and I am currently a Computer Science student at the 
                        University of Győr, and want to get some experience working in the tech industry.
                    </Text>
                </Group>
            </Container>
    )
}