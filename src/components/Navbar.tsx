import { NavLink } from "solid-app-router"



const Navbar = () => {
    const Home = <NavLink href="/">Home</NavLink>;
    const Skills = <NavLink href="/skills">Skills</NavLink>;
    return(
    <nav class="text-slate-300 space-x-2">
        {Home}
        {Skills}
        <NavLink href="/projects">Projects</NavLink>
    </nav>);
}

export default Navbar;