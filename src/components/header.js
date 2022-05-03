import React, { useState } from "react"
import styled from "styled-components"
import { Link  } from "react-router-dom"

import * as ROUTES from "../constants/routes"

// styled components
const Container = styled.div`
    display: flex;
    height: 75px;
    background-color: #2A2438;
    justify-content: space-between;
    align-items: center;

    @keyframes slideInDown {
            0% {
            transform: translateY(-100%);
            }
            100% {
            transform: translateX(0);
            }
        }

    animation: 1s ease-out 0s 1 slideInDown;
`

const Group = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:first-of-type {
        margin: 0 auto;
    }

    &:last-of-type {
        margin-right: 40px;
    }
`

const Logo = styled.p`
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.18em;
    margin-left: 40px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: white;
    transition: 300ms;

    &:hover {
        color: #FFB703;
    }
`

const Menu = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    margin: 0 30px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: #DBD8E3;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: -3px;
        left: 0;
        background-color: #FFB703;
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
      }
      
      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
`

const Icon = styled.img`
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
    height: 24px;
    width: 24px;
    margin: 20px;

    &:hover {
        transform: scale(1.1);
    }
`

const CustomLink = styled.a``

export default function Header() {
    return (
            <Container>
                <Link to={ROUTES.HOME}>
                    <Logo>Friedrich Artúr</Logo>
                </Link>
                <Group>
                    <Link to={ROUTES.ABOUT}><Menu>About</Menu></Link>
                    <Link to={ROUTES.PROJECTS}><Menu>Projects</Menu></Link>
                    <Link to={ROUTES.RESUME}><Menu>Resume</Menu></Link>
                    <Link to={ROUTES.CONTACT}><Menu>Contact</Menu></Link>     
                </Group>
                <Group>
                    <CustomLink href="https://github.com/arturfriedrich">
                        <Icon src={require("../images/icons/icons8-github-24.png")} />
                    </CustomLink>
                    <CustomLink href="https://twitter.com/arturfriedrich7">
                        <Icon src={require("../images/icons/icons8-twitter-24.png")} />
                    </CustomLink>
                    <CustomLink href="https://www.linkedin.com/in/friedrich-art%C3%BAr-6840201a1/">
                        <Icon src={require("../images/icons/icons8-linkedin-24.png")} />
                    </CustomLink>
                </Group>
            </Container>
    )
}