import { For, createResource, Show } from "solid-js";
import { Repositories } from "../types";

import star from "../assets/star.svg";
import fork from "../assets/fork.png";

const DisplayRepo = (props: { data: Repositories }) => {
    const license = props.data.license ? props.data.license.spdx_id : "no license";
    let topics = "";
    props.data.topics.forEach((c) => topics += c + ", ");
    if (topics.length > 2) {
        topics = "Topics: " + topics;
        topics = topics.slice(0, topics.length - 2);
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
    const starred = <img class="w-3" src={star} alt="" />
    const forked = <img class="h-4 mt-1.5 ml-1" src={fork} alt="" />
    return(<>
    <div class="flex-wrap m-1 p-4 bg-stone-800 max-w-xs min-w-xs rounded-md text-slate-200">
        <a 
            class="text-blue-300"
            href={props.data.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.data.full_name}
        </a>
        <div>{topics}</div>
        Description: {description}
        <br />
        Last update: {month}/{day}/{year}
        <br />
        <div class="flex text-center justify-center">
            {props.data.language && (props.data.language + " - " )} {license}{props.data.fork && (<> - {forked} </>)} {props.data.stargazers_count > 0 && (<> - {props.data.stargazers_count} {starred}</>)}
        </div>
        </div>
    </>);
}

const sortData = (data: Array<Repositories> | undefined) => {
    return data?.sort(function(x, y) {
        const valueX = x.stargazers_count + x.forks_count + x.open_issues_count + x.watchers_count;
        const valueY = y.stargazers_count + y.forks_count + y.open_issues_count + y.watchers_count;
        if (valueX < valueY) {
        return 1;
        }
        if (valueX > valueY) {
        return -1;
        }
        return 0;
    });
}

const fetchRepos = async () => 
    (await fetch("https://api.github.com/users/notseanray/repos?per_page=100")
        .then(res => res.json())    
        .then(res => res as Array<Repositories>))

const Projects = () => {
    const [data] = createResource(fetchRepos);
    return (<div class="flex text-center justify-center">
        <Show when={data.loading}>
            <div class="flex items-center justify-center">
                <div class="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded" role="status">
                </div>
            </div>
            <div class="pl-2 text-slate-400">
                loading data from GitHub...
            </div>
        </Show>
        <Show when={!data.loading}>
            <div class="flex-wrap text-center justify-center">
                <For each={sortData(data())}>
                    {(d: Repositories) => <><DisplayRepo data={d} /></>}
                </For>
            </div>
        </Show>
    </div>)
}

export default Projects;