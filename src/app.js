import React, { useState } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"

import { Home, About, Projects, Resume, Contact } from "./pages"

export default function App() {
    const [lighTheme, setLightTheme] = useState(false)

    function changeTheme() {
        setLightTheme(prevTheme => !prevTheme)
        console.log(lighTheme)
    }

    return (
        <Router>
        <Switch>
            <Route path={ROUTES.CONTACT}>
                <Contact />
            </Route>
            <Route path={ROUTES.RESUME}>
                <Resume />
            </Route>
            <Route path={ROUTES.PROJECTS}>
                <Projects />
            </Route>
            <Route path={ROUTES.ABOUT}>
                <About />
            </Route>
            <Route path={ROUTES.HOME}>
                <Home changeTheme={changeTheme} />
            </Route>
        </Switch>
    </Router>
    )
}