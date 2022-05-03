import React from "react"
import styled from "styled-components"
import { Header, Footer, ProjectsComponent } from "../components/index"

const Container = styled.div``

export default function Projects() {
    return (
        <Container>
            <Header />
            <ProjectsComponent />
            <Footer />
        </Container>
    )
}