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
`

const Group = styled.div``

const Title = styled.p`
    font-weight: 800;
    font-size: 64px;
    line-height: 27px;
    letter-spacing: 0.1em;
    margin-bottom: 20px;

    color: #DBD8E3;
`

const Form = styled.form`
    margin: 0 auto;
    text-align: center;
    border: 2px solid transparent;
    height: calc(100vh - 8em);
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Input = styled.input`
    display: block;
    border: none;
    border-radius: 5px;
    margin: 1em auto;
    padding: .75em 1.5em;
    background-color: var(--blue);
    font-family: inherit;
    color: var(--blue);
    font-weight: 700;
    width: 50%;
    outline: none;
    width: 60%;
`

const Textarea = styled.textarea`
    display: block;
    border: none;
    border-radius: 5px;
    margin: 1em auto;
    padding: .75em 1.5em;
    background-color: var(--blue);
    font-family: inherit;
    color: var(--blue);
    font-weight: 700;
    width: 50%;
    outline: none;
    width: 60%;
`

const Button = styled.button`
    background-color: var(--blue);
    color: white;
    text-decoration: none;
    font-weight: 700;
    padding: .5em 1.5em;
    margin-left: 1.5em;
    width: 8em;
    text-align: center;
    margin-top: -2em;
    border-radius: 5px;
`

export default function Contact() {
    return (
        <Container>
            <Group data-aos="fade-in">
                <Title>Contact me</Title>
                <Form method="post">
                    <Input type="text" name="name" placeholder="Name" required />
                    <Input type="email" name="email" placeholder="Email" required />
                    <Textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></Textarea>
                    <Button type="submit" >Send</Button>
                </Form>
            </Group>
        </Container>
    )
}