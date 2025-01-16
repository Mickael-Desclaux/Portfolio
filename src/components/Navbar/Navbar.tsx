import React, { useContext, useState } from "react";
import './Navbar.css'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";
import { DarkModeContext } from "../../contexts/DarkModeProvider";

export default function NavbarDefault() {
    const [openNav, setOpenNav] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color={`${darkMode ? 'white' : 'blue-gray'}`}
                className="flex items-center gap-x-2 p-1 font-medium">
                <NavLink
                    to={"/projects"}
                    className={({ isActive }) => isActive ? "active" : undefined}>
                    Mes réalisations
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar className={`bg-${darkMode ? 'dark-gray' : 'white'} mx-auto max-w-screen-xl`}>
            <div className="container mx-auto flex items-center justify-around text-blue-gray-900">
                <NavLink
                    to="/"
                    className={`mr-4 cursor-pointer py-1.5 font-medium ${darkMode ? 'text-white' : 'text-blue-gray'}`}
                >
                    Accueil
                </NavLink>
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                <ToggleButton/>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}>
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </Navbar>
    );
}