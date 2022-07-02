import { For, createResource, Show } from "solid-js";
import { Repositories } from "../types";

import star from "../assets/star.svg";
import fork from "../assets/fork.png";

let features = new Set();

const createFeature = (feature: {
    name: string;
    image: string;
    description: string;
    link: string;
}) => {
    const link =
        feature.link.length > 0
            ? feature.link
            : "https://github.com/" + feature.name;

    return (
        <>
            <div class="flex-wrap m-1 text-sm w-[40rem] min-w-lg bg-stone-800 rounded-md text-slate-200">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        class="rounded w-[40rem] h-80"
                        src={feature.image}
                        alt=""
                    />
                </a>
                <div class="p-4">
                    <a
                        class="text-blue-300 font-bold text-base"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {feature.name}
                    </a>
                    <div class="text-slate-300 font-semibold">
                        {feature.description}
                    </div>
                </div>
            </div>
        </>
    );
};

const featureCards = [
    {
        name: "notseanray/server-dashboard",
        image: "https://cdn.discordapp.com/attachments/824765653389934685/992886673467772958/unknown.png",
        description:
            "Monitor server statistics in real time. Displays load average, thermals, ram usage, network, and more in detail and over an hour period. Written in VueJs with Tailwindcss, Vuex, Charts.js.",
        link: "",
    },
    {
        name: "notseanray/taurus",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmellamusic.com%2Fwp-content%2Fuploads%2F2019%2F03%2FTaurus-Constellation.png&f=1&nofb=1",
        description:
            "Taurus is a backup managment system and cross-game/application chatbridge application written in Rust. The process can communicate between various tmux sessions and over websockets to provide a way to share text chat between Discord, Minecraft, Terraria, and many more games/applications. ",
        link: "",
    },
].filter((c) => features.add(c.name));

const DisplayRepo = (props: { data: Repositories }) => {
    if (features.has(props.data.full_name)) {
        return <></>;
    }
    const license = props.data.license
        ? props.data.license.spdx_id
        : "no license";
    let topics = "";
    props.data.topics.forEach((c) => (topics += c + ", "));
    if (topics.length > 2) {
        topics = topics.slice(0, topics.length - 2);
    } else {
        topics += "none";
    }
    let description = "";
    if (props.data.description) {
        description += props.data.description;
    } else {
        description = "click the link to view more";
    }
    const date = props.data.updated_at.slice(2, 10);
    const year = date.slice(0, 2);
    const month = date.slice(3, 5);
    const day = date.slice(6, 8);
    const starred = <img class="w-3" src={star} alt="" />;
    const forked = <img class="h-4 mt-1.5 ml-1" src={fork} alt="" />;
    return (
        <>
            <div class="flex-wrap m-1 p-4 text-sm bg-stone-800 max-w-xs min-w-xs rounded-md text-slate-200">
                <a
                    class="text-blue-300 font-bold text-base"
                    href={props.data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.data.full_name}
                </a>
                <div class="text-slate-300 font-semibold">Description</div>
                {description}
                <br />
                <div class="text-slate-300 font-semibold">Topics</div>
                {topics}
                <div class="text-slate-300 font-semibold">Last Update </div>
                {month}/{day}/{year}
                <br />
                <div class="font-semibold flex text-center justify-center">
                    {props.data.language && props.data.language + " - "}{" "}
                    {license}
                    {props.data.fork && <> - {forked} </>}{" "}
                    {props.data.stargazers_count > 0 && (
                        <>
                            {" "}
                            - {props.data.stargazers_count} {starred}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

const sortData = (data: Array<Repositories> | undefined) => {
    return data?.sort(function (x, y) {
        const valueX =
            x.stargazers_count +
            x.forks_count +
            x.open_issues_count +
            x.watchers_count;
        const valueY =
            y.stargazers_count +
            y.forks_count +
            y.open_issues_count +
            y.watchers_count;
        if (valueX < valueY) {
            return 1;
        }
        if (valueX > valueY) {
            return -1;
        }
        return 0;
    });
};

const fetchRepos = async () =>
    await fetch("https://api.github.com/users/notseanray/repos?per_page=100")
        .then((res) => res.json())
        .then((res) => res as Array<Repositories>);

const Projects = () => {
    const [data] = createResource(fetchRepos);
    return (
        <>
            <div class="text-xl font-bold text-slate-200">
                Featured Projects
            </div>
            <div class="flex items-center justify-center">
                <div class="flex-wrap text-center justify-center">
                    <For each={featureCards}>
                        {(f: any) => createFeature(f)}
                    </For>
                </div>
            </div>
            <div class="text-xl font-semi-bold text-slate-200">
                Other Projects
            </div>
            <div class="flex text-center justify-center">
                <Show when={data.loading}>
                    <div class="flex items-center justify-center">
                        <div
                            class="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded"
                            role="status"
                        ></div>
                    </div>
                    <div class="pl-2 font-bold text-slate-400">
                        loading data from GitHub...
                    </div>
                </Show>
                <Show when={!data.loading}>
                    <div class="flex-wrap text-center justify-center">
                        <For each={sortData(data())}>
                            {(d: Repositories) => <DisplayRepo data={d} />}
                        </For>
                    </div>
                </Show>
            </div>
        </>
    );
};

export default Projects;
