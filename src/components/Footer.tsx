import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.png";
import spotify from "../assets/spotify.png";
import gmail from "../assets/gmail.png";

const FooterLink = (props: { link: string; icon: any }) => {
    return (
        <a
            class="mb-12 p-1 m-0.5 text-xs text-blue-400 tracking-widest rounded-md hover:bg-red-500 duration-300"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img class="h-8" src={props.icon} alt="" />
        </a>
    );
};

const Footer = () => {
    return (
        <footer class="flex text-center justify-center">
            <FooterLink link="https://github.com/notseanray" icon={github} />
            <FooterLink
                link="https://www.linkedin.com/in/sean-ray/"
                icon={linkedin}
            />
            <FooterLink
                link="https://open.spotify.com/user/rahhkj5ivyqfse41t221zzjgw?si=507be134fff6462f"
                icon={spotify}
            />
            <FooterLink link="mailto:seanray410@gmail.com" icon={gmail} />
        </footer>
    );
};

export default Footer;
