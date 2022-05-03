import React, { useState } from "react"
import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

import ProjectCard from "./project-card"
import { ProjectsData } from "../data/projects"

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
    gap: 100px;
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.1em;
    margin-top: -50px;
    margin-bottom: 90px;

    color: #DBD8E3;
`

const Button = styled.a`
    background-color: #FFB703;
    border-radius: 20px;
    color: #2A2438;
    padding: 20px 40px;

    font-weight: 800;
    font-size: 20px;
    line-height: 0px;

    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 60px;
    cursor: pointer;

    &:hover {
        background-color: #DBD8E3;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
    }
`

export default function ProjectsHome() {
    const cards = ProjectsData.map(item => {
        return (
            <ProjectCard
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <ParallaxProvider>
            <Container>
                <Parallax translateX={["800px", '-200px']}>
                    <Title>Projects</Title>
                </Parallax>
                <Parallax translateY={["800px", '-800px']}>
                    <Group>
                        {cards}
                    </Group>
                </Parallax>
                <Button>More Projects</Button>
            </Container>
        </ParallaxProvider>
    )
}