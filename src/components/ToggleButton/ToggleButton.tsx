import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";
import { Button } from "@material-tailwind/react";
import './ToggleButton.css'

export default function ToggleButton() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    console.log(darkMode);

    return (
        <Button variant="text" size="sm" className="inline-block hover:bg-transparent">
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider"></span>
            </label>
        </Button>
    )
}