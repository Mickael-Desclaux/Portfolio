import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";
import './ToggleButton.css'

export default function ToggleButton() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    console.log(darkMode);

    return (
        <>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider inline-block"></span>
            </label>
        </>
    )
}