import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2A2438;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 75px);
    background-color: #2A2438;
    margin: 100px;
`

const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: auto;
    heigth: 100%;
    margin-bottom: 310px;
`

const TextBox = styled.div`
    width: 500px;
    height: 500px;
    background-color: #5C5470;
    border-radius: 25px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: 200ms;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin: 0 75px;

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

const Title = styled.p`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.1em;
    margin-top: 200px;

    color: #DBD8E3;

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

const Text = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;
    color: #DBD8E3;
`

const Image = styled.img`
    width: 276px;
    height: 407px;
    margin: 0 75px;

    box-shadow: 8px 8px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    transition: 200ms;

    &:hover {
        transform: scale(1.01);
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

export default function About() {
    return (
        <Container>
            <Title>{/* About */}Rólam</Title>
            <Group>
                <TextBox>
                    <Text>
                    {/* I'm a Computer Science Engineering at the Széchenyi István University, in Győr, Hungary. 
                    I started learning programming in high school, mainly Python and Free Pascal. I realized, 
                    that I'm obsessed with creating things only by writing words and numbers one after the other. 
                    After I graduated from high school I knew, I want to study Computer Science. <br /><br />
                    During COVID I started learning Front End Development at Scrimba.com and finished their 
                    Front End Developer Bootcamp, I wanted to learn more and more so I started creating projects 
                    and finding problems to solve. I feel really passionate about creating visible and usable 
                    products. */}
                    A nevem Friedrich Artúr és jelenleg mérnökinformatikus alapbaszkra járok a Széchenyi István 
                    Egyetemen Győrben. Programozást tanulni a gimnáziumban kezdtem el, az órákon főleg Free Pascalt
                    használtunk, azonban úgy éreztem szükséges lenne megtanulnom valamilyen fejlettebb nyelvet,
                    ezért otthon elkezdtem Pythont tanulni. A programozás szerete hamar megmutatkozott rajtam, így
                    azonnal tudtam, ezt szeretném az egyetemen is tanulni. <br /><br />
                    A COVID alatt kezdett el érdekelni a front end fejlesztés, ezért hosszas keresés után a
                    Scrimba.com Bootcampje mellett döntöttem. Erős HTML, CSS és JavaScript alapokat szereztem,
                    valamint a React fejlesztés alapjait is megismertem, projektjeim nagy részének inspirációja
                    és ötletadója volt ez a képzés. Azonban számomra sosem elég a tanulás, így mindig újabb és újabb
                    dolgok és technológiák után kutatok, valamint próbálom mélyíteni a tudásomat a már megszerzett
                    területeken. 
                    </Text>
                </TextBox>
                <Image src={require("../images/misc/me.jpeg")} />
            </Group>
        </Container>
    )
}