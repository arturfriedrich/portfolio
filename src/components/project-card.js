import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 300px;

    background: #5C5470;
    border-radius: 10px;

    margin: 0 50px;

    transition: 300ms;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.5);
    }
`

const Image = styled.img`
    width: 300px;
    height: 180px;
    box-shadow: 0 4px 20px 1px rgba(0,0,0,0.5);

    border-radius: 10px 10px 0px 0px;
`

const Wrapper = styled.div`
    padding: 10px;
`

const Title = styled.p`
    margin: 0px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;

    color: #FFFFFF;
`

const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    height: 100px;

    color: #FFFFFF;
`

const Group = styled.div`
    display: flex;
`

const Button = styled.a`
    padding: 7px 15px;

    background: #352F44;
    border-radius: 20px;

    margin-bottom: 10px;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    display: block;
    align-items: center;
    text-align: center;
    text-decoration: none;

    margin-right: 10px;

    color: #FFFFFF;

    &:hover {
        background-color: #DBD8E3;
        color: #352F44;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
    }
`

export default function ProjectCard(props) {
    return (
        <Container>
            <Image src={props.image} alt={props.alt} />
            <Wrapper>
                <Title>{props.title}</Title>
                <Description>{props.leiras}</Description>
                <Group>
                    {props.liveDemoUrl ? <Button href={props.liveDemoUrl} target="_blank">{/* Live Demo */}Próbáld ki</Button> : null}
                    <Button href={props.gitHubUrl} target="_blank">GitHub</Button>
                </Group>
            </Wrapper>
        </Container>
    )
}