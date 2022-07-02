import emacs from "../assets/skills/tools/emacs.png";
import nvim from "../assets/skills/tools/nvim.png";
import solid from "../assets/skills/frameworks/solidjs-original.svg";

const SkillIcon = (props: { icon: string; url: string }) => {
    return (
        <a
            class="m-0.5 tracking-widest"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                class="p-1 h-16 bg-stone-700 rounded-md hover:bg-red-500 duration-300"
                src={props.icon}
                decoding="async"
                alt=""
            />
        </a>
    );
};

const Skills = () => {
    return (
        <>
            <div class="flex p-1 m-1 text-center justify-center">
                <div class="w-9/12">
                    <div class="text-xl font-bold text-slate-200">
                        Technologies I've Worked With
                    </div>
                    <div class="text-sm font-semibold text-slate-300">
                        Languages
                    </div>
                    <Langs />
                    <div class="text-sm font-semibold text-slate-300">
                        Frameworks
                    </div>
                    <Frameworks />
                    <div class="text-sm font-semibold text-slate-300">
                        Tools & More
                    </div>
                    <Tools />
                    <div class="text-sm font-semibold text-slate-300">
                        Interested In Learning
                    </div>
                    <Interested />
                </div>
            </div>
        </>
    );
};

const Langs = () => {
    return (
        <div class="flex-wrap my-3 flex text-center justify-center">
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
                url="https://www.rust-lang.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                url="https://iso-9899.info/wiki/The_Standard"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                url="https://www.javascript.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                url="https://www.typescriptlang.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                url="https://isocpp.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                url="https://go.dev/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                url="https://www.python.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                url="https://www.gnu.org/software/bash/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original-wordmark.svg"
                url="https://www.lua.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                url="https://www.java.com/en/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                url="https://docs.microsoft.com/en-us/dotnet/csharp/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                url="https://html.com/html5/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                url="https://css3.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                url="https://sass-lang.com/"
            />
        </div>
    );
};

const Frameworks = () => {
    return (
        <div class="flex-wrap my-3 flex text-center justify-center">
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                url="https://vuejs.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                url="https://reactjs.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg"
                url="https://svelte.dev/"
            />
            <SkillIcon icon={solid} url="https://www.solidjs.com/" />
        </div>
    );
};

const Tools = () => {
    return (
        <div class="flex-wrap my-3 flex text-center justify-center">
            <SkillIcon icon={nvim} url="" />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
                url="https://www.docker.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                url="https://git-scm.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg"
                url="https://about.gitlab.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                url="https://code.visualstudio.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg"
                url="https://gradle.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg"
                url="https://cmake.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                url="https://www.postgresql.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
                url="https://www.sqlite.org/index.html"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                url="https://aws.amazon.com/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                url="https://nodejs.org/"
            />
            <SkillIcon icon={emacs} url="" />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                url="https://tailwindcss.com/"
            />
        </div>
    );
};

const Interested = () => {
    return (
        <div class="flex-wrap my-3 flex text-center justify-center">
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg"
                url="https://elixir-lang.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg"
                url="https://www.haskell.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original-wordmark.svg"
                url="https://julialang.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                url="https://kotlinlang.org/"
            />
            <SkillIcon
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg"
                url="https://ziglang.org/"
            />
        </div>
    );
};

export default Skills;
