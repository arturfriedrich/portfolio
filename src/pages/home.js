import React from "react"

import { Header, Hero, AboutHome, ProjectsHome, Footer } from "../components"

export default function Home(props) {
    return (
        <>
            <Header changeTheme={props.changeTheme} />
            <Hero />
            <AboutHome />
            <ProjectsHome />
            <Footer />
        </>
    )
}