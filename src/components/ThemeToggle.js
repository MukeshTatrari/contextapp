import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'

function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}> Toggle the Theme</button>
        </div>
    );
}

export default ThemeToggle;