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

    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;

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

const DoubleBox = styled.div`
    width: 1040px;

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

const Title = styled.p`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;

    margin: 0;
    margin-left: 20px;
    margin-top: 20px;

    display: flex;
    align-items: center;

    color: #FFFFFF;
`

const Subtitle = styled.p`
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;

    margin-left: 20px;

    display: flex;
    align-items: center;

    color: #FFFFFF;
`

const Text = styled.p`
    width: 500px;
    height: 300px;

    font-weight: 400;
    font-size: 20px;
    line-height: 27px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const Summary = styled.p`
    width: 450px;
    height: 278px;

    font-weight: 400;
    font-size: 20px;
    line-height: 27px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;

    margin-left: 20px;

    color: #FFFFFF;
`

const Skills = styled(Box)`
    display: flex;
    flex-flow: wrap;

    justify-content: left;
    align-items: none;
    flex-direction: row;
`

const Skill = styled.p`
    background-color: #ffb703;
    padding: 10px 25px;
    display: inline;
    border-radius: 15px;
    font-weight: 500;
    height: 18px;
    margin: 20px;

    &:hover {
        box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
    }
`

const List = styled.ul``

const Item = styled.li`
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    margin-left: 5px;

    &:last-of-type {
        margin-bottom: 20px;
    }

    color: #FFFFFF;
`

const SectionTitle = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 27px;

    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 0px;

    color: #FFFFFF;
`

const Textbox = styled(Summary)`
    display: block;
`

const Tapasztalat = styled(SectionTitle)`
    margin-top: 55px;
`

export default function Resume() {
    return (
        <ParallaxProvider>
            <Container>
                <Group>
                    <Parallax translateX={["480px", '-340px']}>
                        <Box>
                            <Title>Friedrich Artúr</Title>
                            <Subtitle>Student and Front End Developer</Subtitle>
                        </Box>
                    </Parallax>
                    <Parallax translateX={["-560px", '400px']}>
                        <Box>
                            <Text>
                                artur.friedrich.harka@gmail.com <br />
                                artur#5667 <br />
                                Győr, Hungary <br />
                                linkedin.com/friedrich-artur <br />
                                github.com/friedrichartur
                            </Text>
                        </Box>
                    </Parallax>
                </Group>
                <Group>
                    <Parallax translateX={["100px", '-300px']}>
                        <Box>
                            <Summary>
                                A kreatív desingben megtaláltam mindazt amit számomra az érdekes és 
                                értékes munkát és tanulást jelent. A változatos problémák és feladatok 
                                megoldása mellett a felhasználó által látott felület megalkotása is a 
                                munkafolyamat része így változatos és kihívásokkal teli. Az egyetem és 
                                iskolákban szerzett tudásomon kívül a kreatív gondolkozásra és alkotási 
                                vágyra is szükség van, ami számomra igen hívogató.
                            </Summary>
                        </Box>
                    </Parallax>
                    <Parallax translateX={["-120px", '380px']}>
                        <Skills>
                            <Skill>HTML5</Skill>
                            <Skill>CSS3</Skill>
                            <Skill>JavaScript ES6</Skill>
                            <Skill>ReactJS</Skill>
                            <Skill>TypeScript</Skill>
                            <Skill>Git</Skill>
                            <Skill>GitHub</Skill>
                            <Skill>Python</Skill>
                            <Skill>C</Skill>
                            <Skill>C++</Skill>
                            <Skill>Notion</Skill>
                            <Skill>Figma</Skill>
                        </Skills>
                    </Parallax>
                </Group>
                <Group>
                    <DoubleBox>
                        <SectionTitle>Tanulmányaim</SectionTitle>
                        <List>
                            <Item>Széchenyi István Egyetem, Mérnökinformatikus BSc -- 2021. Február -</Item>
                            <Item>Széchenyi István Gimnázium, Sopron, Érettségi bizonyítvány -- 2014. Szeptember - 2020. Május</Item>
                        </List>
                    </DoubleBox>
                </Group>
                <Group>
                    <DoubleBox>
                        <SectionTitle>Minősítések</SectionTitle>
                        <List>
                            <Item>Scrimba Front End Developer Career Path, 2021, október</Item>
                        </List>
                    </DoubleBox>
                </Group>
                <Group>
                    <Parallax translateX={["-800px", '700px']}>
                        <Box>
                            <SectionTitle>Érdeklődési köreim</SectionTitle>
                            <List>
                                <Item>Tisztában lenni a legújabb technológiákkal</Item>
                                <Item>Csillagászat és űrkutatás</Item>
                                <Item>Tudományos fantasztikus regények és filmek</Item>
                                <Item>Gaming</Item>
                                <Item>Hegymászás és biciklizés</Item>
                            </List>
                        </Box>
                    </Parallax>
                    <Parallax translateX={["800px", '-700px']}>
                        <Box>
                            <Tapasztalat>Tapasztalat</Tapasztalat>
                            <Textbox>
                                A Menedék Programozó Klub tagjaként, valamint egyénileg is több versenyen 
                                is indultam. Ezek közül főleg csapatban tudtunk eredményesen szerepelni, 
                                retró játékkonzolokra írt játékainkkal.
                            </Textbox>
                        </Box>
                    </Parallax>
                </Group>
            </Container>
        </ParallaxProvider>
    )
}