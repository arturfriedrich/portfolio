import React, { useState } from "react"

export function useChangeTheme() {
    const [lightTheme, setLightTheme] = useState(false)
    setLightTheme(prevTheme => !prevTheme)
    return lightTheme
}