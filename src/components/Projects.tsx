import { For, createResource } from "solid-js";
import { Repositories } from "../types";

const DisplayRepo = (props: { data: Repositories }) => {
    const license = props.data.license ? props.data.license.spdx_id : "no license";
    let topics = "";
    props.data.topics.forEach((c) => topics += c + ", ");
    if (topics.length > 2) {
        topics = "Topics: " + topics;
        topics = topics.slice(0, topics.length - 2);
    }
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
        {props.data.description}
        <br />
        {props.data.updated_at}
        <br />
        {props.data.language} - {license}{props.data.fork && " - fork"} {props.data.stargazers_count > 0 && (" - " + props.data.stargazers_count + " ⭐")}
        </div>
    </>);
}

const fetchRepos = async () => 
    (await fetch("https://api.github.com/users/notseanray/repos?per_page=100")
        .then(res => res.json())    
        .then(res => res as Array<Repositories>))

const Projects = () => {
    const [data] = createResource(fetchRepos);
    return (<div class="flex text-center justify-center">
        {data.loading && (<>
            <div class="text-slate-100">
                Loading from GitHub...
            </div>
        </>)}
        {!data.loading && (
        <div class="flex-wrap text-center justify-center">
            <For each={data()}>
                {(d: Repositories) => <>
                    <DisplayRepo data={d} />
                </>}
            </For>
        </div>)}
    </div>)
}

export default Projects;