import React, { Component, createContext } from 'react'
export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            isLightTheme: true,
            light: { sytax: '#555', ui: '#ddd', bg: '#eee' },
            dark: { sytax: '#ddd', ui: '#333', bg: '#555' }
        }
    }

    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
