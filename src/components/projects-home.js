import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

import ProjectCard from "./project-card"
import { ProjectsData } from "../data/projects"
import * as ROUTES from "../constants/routes"


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

const Button = styled.div`
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

    text-decoration: none;

    &:hover {
        background-color: #DBD8E3;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
    }
`

export default function ProjectsHome() {
    const cards = ProjectsData.map(item => {
        if ( item.id < 3 ) {
            return (
                <ProjectCard
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    return (
            <Container>
                {/* <Parallax translateX={["800px", '-20px']} easing='easeOutQuad' opacity={[0, 1]}> */}
                    <Title>{/* Projects */}Projektek</Title>
                {/* </Parallax> */}
                {/* <Parallax translateY={["750px", '-250px']} easing='easeOutQuad' opacity={[0, 1]}> */}
                    <Group>
                        {cards}
                    </Group>
                {/* </Parallax> */}
                {/* <Parallax opacity={[.5, 1]}> */}
                    <Link to={ROUTES.PROJECTS}>
                        <Button >
                            {/* More Projects */}Mutass többet
                        </Button>
                    </Link>
                {/* </Parallax> */}
            </Container>
    )
}