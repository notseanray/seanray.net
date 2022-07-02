import { NavLink } from "solid-app-router";

const Navbar = () => {
    const Home = (
        <NavLink class="hover:underline" href="/">
            Home
        </NavLink>
    );
    const Skills = (
        <NavLink class="hover:underline" href="/skills">
            Skills
        </NavLink>
    );
    const Projects = (
        <NavLink class="hover:underline" href="/projects">
            Projects
        </NavLink>
    );
    const Music = (
        <NavLink class="hover:underline" href="/music">
            Music
        </NavLink>
    );
    return (
        <nav class="font-bold text-slate-300 space-x-4">
            {Home} 🏠
            {Skills} ✨{Projects} 🗒️
            {Music} 🎵
        </nav>
    );
};

export default Navbar;
