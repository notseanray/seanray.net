import { NavLink } from "solid-app-router";

const Navbar = () => {
    const Home = <NavLink href="/">Home</NavLink>;
    const Skills = <NavLink href="/skills">Skills</NavLink>;
    const Projects = <NavLink href="/projects">Projects</NavLink>;
    return (
        <nav class="text-slate-300 space-x-4">
            {Home} 🏠
            {Skills} ✨{Projects} 🗒️
            {/* {"Music"} 🎵 */}
        </nav>
    );
};

export default Navbar;
