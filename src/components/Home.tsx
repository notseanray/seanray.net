import Discord from "./Discord";

const Home = () => {
    const ssh_key =
        'echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHhssm/d0+mNX2cAhohgwOCRBjYCIQzylzRD2Hwr8lrr sean@seanray.net" >> ~/.ssh/authorized_keys';
    // const ssh_key = "";
    const age = Math.floor((Date.now() / 1000 - 1135486800) / 31557600);
    return (
        <>
            <>
                <div class="flex text-center justify-center">
                    <div class="flex text-center justify-center bg-color w-4/12 text-xl text-blue-200">
                        👋
                        <br />
                        I'm a {age}-year-old aspiring Full Stack/Backend
                        developer.
                    </div>
                </div>
                <div class="text-xl text-slate-200">ssh</div>
                <div class="flex p-1 m-1 text-center justify-center">
                    <div class="bg-stone-800 rounded-md w-4/12 text-xs text-slate-400">
                        {ssh_key}
                    </div>
                </div>

                <div class="text-xl text-slate-200">
                    Language Stats - GitHub
                </div>
                <div class="my-3 flex text-center justify-center">
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=notseanray&langs_count=12&theme=dark&layout=compact"
                        alt=""
                    />
                </div>
                <div class="text-xl text-slate-200">Discord</div>
                <div class="flex text-center justify-center">
                    <Discord />
                </div>
            </>
            <br />
        </>
    );
};

export default Home;
