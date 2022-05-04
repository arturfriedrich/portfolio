import React from "react"
import styled from "styled-components"

const Container = styled.div`
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "nev elerhetosegek"
        "bemutatkozas technologiak"
        "tanulmanyok tanulmanyok"
        "minositesek minositesek"
        "hobbi tapasztalat"; 
`

const Tanulmanyok = styled.div`
    grid-area: tanulmanyok;
`

const Minositesek = styled.div`
    grid-area: minositesek;
`

const Nev = styled.div`
    grid-area: nev;
`

const Elerhetosegek = styled.div`
    grid-area: elerhetosegek;
`

const Bemutatkozas = styled.div`
    grid-area: bemutatkozas;
`

const Technologiak = styled.div`
    grid-area: technologiak;
`

const Hobbi = styled.div`
    grid-area: hobbi;
`

const Tapasztalat = styled.div`
    grid-area: tapasztalat;
`

export default function Resume() {
    return (
        <Container>
            <Tanulmanyok></Tanulmanyok>
            <Minositesek></Minositesek>
            <Nev></Nev>
            <Elerhetosegek></Elerhetosegek>
            <Bemutatkozas></Bemutatkozas>
            <Technologiak></Technologiak>
            <Hobbi></Hobbi>
            <Tapasztalat></Tapasztalat>
        </Container>
    )
}