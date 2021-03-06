import React from "react"
import styled from "styled-components"

import ProjectCard from "./project-card"
import { ProjectsData } from "../data/projects"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2A2438;
    justify-content: center;
    align-items: center;
    background-color: #2A2438;
`

const Group = styled.div`
    display: flex;

    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: 2s ease-out 0s 1 fadeIn;
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.1em;
    margin-bottom: 20px;

    color: #DBD8E3;
`

const Subtitle = styled.p`
    font-weight: 800;
    font-size: 32px;
    line-height: 27px;

    display: flex;
    align-items: center;
    text-align: center;

    margin: 50px 0;

    color: #FFFFFF;
`

export default function Projects() {
    const cards = ProjectsData.map(item => {
    return (
        <ProjectCard
            key={item.id}
            {...item}
        />
        )
    })

    return (
        <Container>
            <Title>{/* Projects */}Projektek</Title>
            <Subtitle>React</Subtitle>
            <Group>
                {cards.slice(0, 3)}
            </Group>
            <Subtitle>JavaScript</Subtitle>
            <Group>
                {cards.slice(3, 6)}
            </Group>
            <Subtitle>Egyéb</Subtitle>
            <Group>
                {cards.slice(6, 9)}
            </Group>
        </Container>
    )
}