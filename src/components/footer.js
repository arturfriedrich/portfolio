import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 150px;
    margin-top: 50px;

    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.2;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    position: relative;
    margin: 0px 50px;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: -3px;
        left: 0;
        background-color: white;
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
      }
      
      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
`

const Text = styled.p`
    color: white;
    margin-top: 20px;
`

export default function Footer() {
    return (
        <Container>
            <Group>
                <Link href={"https://github.com/arturfriedrich"} target="_blank">GitHub</Link>
                <Link href={"https://twitter.com/arturfriedrich7"} target="_blank">Twitter</Link>
                <Link href={"https://www.linkedin.com/in/friedrich-art%C3%BAr-6840201a1/"} target="_blank">LinkedIn</Link>
            </Group>
            <Text>This page was created by Artúr Friedrich. 2022</Text>
        </Container>
    )
}