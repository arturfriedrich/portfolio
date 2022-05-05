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
    background: #352F44;
    border-radius: 20px;
    grid-area: tanulmanyok;
    height: 150px;
`

const Minositesek = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: minositesek;
    height: 150px;
`

const Nev = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: nev;
    height: 300px;
`

const Elerhetosegek = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: elerhetosegek;
    height: 300px;
`

const Bemutatkozas = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: bemutatkozas;
    height: 300px;
`

const Technologiak = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: technologiak;
    height: 300px;
`

const Hobbi = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: hobbi;
    height: 300px;
`

const Tapasztalat = styled.div`
    background: #352F44;
    border-radius: 20px;
    grid-area: tapasztalat;
    height: 300px;
`

export default function Resume() {
    return (
        <Container>
            <Nev></Nev>
            <Elerhetosegek></Elerhetosegek>
            <Bemutatkozas></Bemutatkozas>
            <Technologiak></Technologiak>
            <Tanulmanyok></Tanulmanyok>
            <Minositesek></Minositesek>
            <Hobbi></Hobbi>
            <Tapasztalat></Tapasztalat>
        </Container>
    )
}