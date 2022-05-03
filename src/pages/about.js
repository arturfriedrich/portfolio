import React from "react"
import styled from "styled-components"
import { Header, Footer, AboutComponent } from "../components/index"

const Container = styled.div``

export default function About() {
    return (
        <Container>
            <Header />
            <AboutComponent />
            <Footer />
        </Container>
    )
}