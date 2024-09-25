import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : undefined}>
            Accueil 
        </NavLink>
        <NavLink to={"/projects"} className={({ isActive }) => isActive ? "active" : undefined}>
            Mes réalisations
        </NavLink>
        <NavLink to={"/resume"} className={({ isActive }) => isActive ? "active" : undefined}>
            Mon CV en une page
        </NavLink>
        <NavLink to={"/contact"} className={({ isActive }) => isActive ? "active" : undefined}>
            Me contacter
        </NavLink>
        </>
    )
}