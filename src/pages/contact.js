import React from "react"
import styled from "styled-components"
import { Header, Footer, ContactComponent } from "../components/index"

const Container = styled.div``

export default function Contact() {
    return (
        <Container>
            <Header />
            <ContactComponent />
            <Footer />
        </Container>
    )
}