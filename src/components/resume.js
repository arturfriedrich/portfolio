import React from "react"
import styled from "styled-components"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

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
`

const Box = styled.div`
    width: 500px;
    height: 300px;

    background: #352F44;
    border-radius: 20px;

    margin: 20px;

    transition: 300ms;

    &:hover {
        transform: scale(1.01);
        border: 2px solid #FFB703;
        box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
    }
`

const DoubleBox = styled.div`
    width: 1040px;
    height: 300px;

    background: #352F44;
    border-radius: 20px;

    margin: 20px;

    transition: 300ms;

    &:hover {
        transform: scale(1.01);
        border: 2px solid #FFB703;
        box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
    }
`

const Title = styled.p``

const Subtitle = styled.p``

const Text = styled.p``

export default function Resume() {
    return (
        <ParallaxProvider>
            <Container>
                <Group>
                    <Parallax translateX={["200px", '-140px']}>
                        <Box></Box>
                    </Parallax>
                    <Parallax translateX={["-280px", '200px']}>
                        <Box></Box>
                    </Parallax>
                </Group>
                <Group>
                    <Parallax translateX={["100px", '-300px']}>
                        <Box></Box>
                    </Parallax>
                    <Parallax translateX={["-120px", '380px']}>
                        <Box></Box>
                    </Parallax>
                </Group>
                <Group>
                    <DoubleBox></DoubleBox>
                </Group>
                <Group>
                    <DoubleBox></DoubleBox>
                </Group>
                <Group>
                    <Parallax translateX={["-800px", '700px']}>
                        <Box></Box>
                    </Parallax>
                    <Parallax translateX={["800px", '-700px']}>
                        <Box></Box>
                    </Parallax>
                </Group>
            </Container>
        </ParallaxProvider>
    )
}