import fetch from "isomorphic-unfetch";
import { createResource, For, Show } from "solid-js";
import * as styles from "../index.scss";
import querystring from "querystring";
import { Track } from "../types";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const max_title = 19;
const max_artist = 21;

// this is depreciated but Buffer does not work properly for some reason
const basic = btoa(`${client_id}:${client_secret}`);

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (timespan: string) => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
            time_range: timespan,
        }),
    });

    return response.json();
};

const getTopTracks = async () => {
    const { access_token } = await getAccessToken("long_term");

    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

const truncate = (title: string, max: number): string => {
    const dots = title.length > max_title;
    let name = title.slice(0, title.length > max ? max : title.length);
    if (dots) {
        name += "...";
    }
    return name;
};

const MusicCard = (props: { song: Track }) => {
    const name = truncate(props.song.title, max_title);
    const artist = truncate(props.song.artist, max_artist);
    return (
        <a
            class="m-0.5"
            href={props.song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div class="bg-stone-700 rounded-md hover:bg-red-500 duration-300">
                <img
                    class="h-40 p-1 rounded-lg hover:opacity-80"
                    src={props.song.cover}
                    decoding="async"
                    alt=""
                />
                <div class="z-20 absolute -translate-y-10">
                    <div style={{ "-webkit-text-stroke": "0.5px #000" }}>
                        <div class="pl-2 font-bold text-left text-sm text-slate-100">
                            {name}
                        </div>
                        <div class="pl-2 font-semibold text-left text-xs text-slate-200">
                            {artist}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

const DisplayMusic = async () => {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 20).map((track: any) => ({
        artist: track.artists.map((_artist: any) => _artist.name).join(", "),
        songUrl: track.external_urls.spotify,
        title: track.name,
        cover: track.album.images[0].url,
        album: track.album.name,
    }));
    return tracks;
};

const Music = () => {
    const [music] = createResource(DisplayMusic);
    return (
        <>
            <div class="text-xl text-slate-100">
                Top Tracks From The Past Month
            </div>
            <Show when={music.loading}>
                <div class="flex text-center justify-center">
                    <div class="flex items-center justify-center">
                        <div
                            class="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded"
                            role="status"
                        ></div>
                    </div>
                    <div class="pl-2 text-slate-400">
                        loading data from Spotify...
                    </div>
                </div>
            </Show>
            <div class="flex p-1 m-1 text-center justify-center">
                <div class="w-9/12">
                    <div class="flex-wrap my-3 flex text-center justify-center">
                        <For each={music()}>
                            {(m: Track) => <MusicCard song={m} />}
                        </For>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;
