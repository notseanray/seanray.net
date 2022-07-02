import Discord from "./Discord";

const Home = () => {
    const ssh_key =
        "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHhssm/d0+m\n\\NX2cAhohgwOCRBjYCIQzylzRD2Hwr8lrr sean@seanray.net";
    // const ssh_key = "";
    const age = Math.floor((Date.now() / 1000 - 1135486800) / 31557600);
    return (
        <>
            <>
                <div class="flex text-center justify-center">
                    <div class="w-4/12 text-xl text-blue-200">
                        👋
                        <br />
                        I'm a {age}-year-old aspiring Full Stack/Backend
                        developer.
                        <div class="mt-2 mb-4 text-sm text-slate-400">
                            In my freetime I like to code, read, and spend time with friends. I'm a GNU/Linux enthusiast, a member of a FRC robotics team, a mentor of a FTC robotics team, and a big proponent of FOSS software.
                            <br />
                            <br />
                            Being a software engineer has been a dream of mine since I was little, I currently work on various personal projects in my freetime.
                            <br />
                            <br />
                            To see more, view the 
                            <a
                                class="text-blue-300 hover:underline"
                                href="/projects"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                projects 
                            </a>
                            tab...
                        </div>
                    </div>
                </div>
                <div class="text-xl font-bold text-slate-300">ssh</div>
                <div class="flex m-1 text-center justify-center">
                    <div class="bg-stone-700 p-3 whitespace-pre rounded-md text-xs text-slate-400">
                        {ssh_key}
                    </div>
                </div>

                <div class="text-xl font-bold text-slate-300">
                    GitHub Commits
                </div>
                <div class="my-3 flex text-center justify-center ">
                    <div class="bg-slate-300 rounded-md p-1">
                        <img
                            class="w-max"
                            src="http://ghchart.rshah.org/notseanray"
                            alt=""
                        />
                    </div>
                </div>
                <div class="my-3 flex text-center justify-center">
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=notseanray&langs_count=12&theme=dark&layout=compact"
                        decoding="async"
                        alt=""
                    />
                </div>
                <div class="text-xl font-bold text-slate-300">Discord</div>
                <div class="flex text-center justify-center">
                    <Discord />
                </div>
            </>
            <br />
        </>
    );
};

export default Home;
