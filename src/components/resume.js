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

    margin: 0;
    margin-left: 20px;
    margin-top: 20px;

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
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

const Icon = styled.img`
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
    height: 24px;
    width: 24px;
    margin: 20px;
`

const Contact = styled.p`
    display: flex;
    flex-direction: row;
    margin: -15px;
`

const Button = styled.a`
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

export default function Resume() {
    return (
        <Container>
            <Group>
                {/* <Parallax translateX={["480px", '-340px']}> */}
                    <Box>
                        <Title>Friedrich Art??r</Title>
                        <Subtitle>Tanul?? ??s front end fejleszt??</Subtitle>
                    </Box>
                {/* </Parallax> */}
                {/* <Parallax translateX={["-560px", '400px']}> */}
                    <Box>
                        <Text>
                            <Contact>
                                <Icon src={require("../images/icons/email.png")} />
                                <p>artur.friedrich.harka@gmail.com</p>
                            </Contact>
                            <Contact>
                                <Icon src={require("../images/icons/discord.png")} />
                                <p>artur#5667</p>
                            </Contact>
                            <Contact>
                                <Icon src={require("../images/icons/pin.png")} />
                                <p>Gy??r, Hungary</p>
                            </Contact>
                            <Contact>
                                <Icon src={require("../images/icons/icons8-linkedin-24.png")} />
                                <p>linkedin.com/in/friedrichartur</p>
                            </Contact>
                            <Contact>
                                <Icon src={require("../images/icons/icons8-github-24.png")} />
                                <p>github.com/friedrichartur</p>
                            </Contact>
                        </Text>
                    </Box>
                {/* </Parallax> */}
            </Group>
            <Group>
                {/* <Parallax translateX={["100px", '-300px']}> */}
                    <Box>
                        <Summary>
                            A kreat??v desingben megtal??ltam mindazt amit sz??momra az ??rdekes ??s 
                            ??rt??kes munk??t ??s tanul??st jelent. A v??ltozatos probl??m??k ??s feladatok 
                            megold??sa mellett a felhaszn??l?? ??ltal l??tott fel??let megalkot??sa is a 
                            munkafolyamat r??sze ??gy v??ltozatos ??s kih??v??sokkal teli. Az egyetem ??s 
                            iskol??kban szerzett tud??somon k??v??l a kreat??v gondolkoz??sra ??s alkot??si 
                            v??gyra is sz??ks??g van, ami sz??momra igen h??vogat??.
                        </Summary>
                    </Box>
                {/* </Parallax> */}
                {/* <Parallax translateX={["-120px", '380px']}> */}
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
                {/* </Parallax> */}
            </Group>
            <Group>
                <DoubleBox>
                    <SectionTitle>Tanulm??nyaim</SectionTitle>
                    <List>
                        <Item>Sz??chenyi Istv??n Egyetem, M??rn??kinformatikus BSc -- 2021. Febru??r -</Item>
                        <Item>Sz??chenyi Istv??n Gimn??zium, Sopron, ??retts??gi bizony??tv??ny -- 2014. Szeptember - 2020. M??jus</Item>
                    </List>
                </DoubleBox>
            </Group>
            <Group>
                <DoubleBox>
                    <SectionTitle>Min??s??t??sek</SectionTitle>
                    <List>
                        <Item>Scrimba Front End Developer Career Path, 2021, okt??ber</Item>
                    </List>
                </DoubleBox>
            </Group>
            <Group>
                {/* <Parallax translateX={["-800px", '700px']}> */}
                    <Box>
                        <SectionTitle>??rdekl??d??si k??reim</SectionTitle>
                        <List>
                            <Item>Tiszt??ban lenni a leg??jabb technol??gi??kkal</Item>
                            <Item>Csillag??szat ??s ??rkutat??s</Item>
                            <Item>Tudom??nyos fantasztikus reg??nyek ??s filmek</Item>
                            <Item>Gaming</Item>
                            <Item>Hegym??sz??s ??s bicikliz??s</Item>
                        </List>
                    </Box>
                {/* </Parallax> */}
                {/* <Parallax translateX={["800px", '-700px']}> */}
                    <Box>
                        <Tapasztalat>Tapasztalat</Tapasztalat>
                        <Textbox>
                            A Mened??k Programoz?? Klub tagjak??nt, valamint egy??nileg is t??bb versenyen 
                            is indultam. Ezek k??z??l f??leg csapatban tudtunk eredm??nyesen szerepelni, 
                            retr?? j??t??kkonzolokra ??rt j??t??kainkkal.
                        </Textbox>
                    </Box>
                {/* </Parallax> */}
            </Group>
            <Button href={require("../data/friedrich_artur_oneletrajz.pdf")} target="_blank">??n??letrajz</Button>
        </Container>
    )
}