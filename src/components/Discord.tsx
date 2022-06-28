import { createResource } from 'solid-js';
import type { HTTPResponse } from '../types';
import placeholder from '../assets/placeholderpfp.png';

const DISCORD_ID = '566444484850745351';

const fetchData = async (id: String) =>
    (await fetch('https://api.lanyard.rest/v1/users/' + id)
        .then(response => response.json())
        .then(response => response as HTTPResponse))
  

const Discord = () => {
    const [user] = createResource(DISCORD_ID, fetchData);
	return (<div class="">
        <div class="m-1 p-4 bg-stone-800 max-w-xs min-w-xs rounded-md hover:shadow-lg shadow-cyan-50">
            {user.loading && (
            <div class="flex">
                <img class="h-16" src={placeholder} alt="" />
                <div class="pl-3.5 text-xs text-slate-300">
                    Loading...
                </div>
            </div>)}
            {!user.loading && (<>
            <div class="flex">
                <img class="h-16 rounded-full" src={"https://cdn.discordapp.com/avatars/" + DISCORD_ID + "/" + user()?.data?.discord_user.avatar} alt="" />
                <div class="pl-0.5">
                    <div class="flex"> 
                        <div class="text-sm text-slate-50 text-left">
                            {user()?.data?.discord_user.username}
                        </div>
                        <div class="text-sm text-slate-400">
                            #{user()?.data?.discord_user.discriminator}
                        </div>
                    </div>
                    <div class="text-sm text-slate-300 text-left">
                        {user()?.data?.discord_status} {user()?.data?.active_on_discord_desktop ? " on desktop" : ""} {user()?.data?.active_on_discord_mobile ? " on mobile" : ""}
                    </div>
                </div>
            </div>
            </>)}
        </div>
        <div class="m-1 p-4 bg-stone-800 shadow flex max-w-xs rounded-md hover:shadow-lg">
            {!user()?.data?.spotify && (<>
                <img class="h-16 rounded-md items-center" src={placeholder} alt="" />
                <div class="pl-3.5 text-xs text-slate-300">
                    Not Currently Listening to Spotify
                </div>
            </>)}
            {user()?.data?.spotify && (<>
                <>
                    <img class="h-16 rounded-md items-center" src={user()?.data?.spotify?.album_art_url} alt="" />
                </>
                <div class="pl-3.5">
                    <div class="text-sm text-slate-50 text-left">
                        {user()?.data?.spotify?.song} by {user()?.data?.spotify?.artist}
                    </div>
                    <div class="text-sm text-slate-300 text-left">
                        on {user()?.data?.spotify?.album}
                        <br />
                        <a
                            class="text-xs text-blue-400 tracking-widest"
                            href={"https://open.spotify.com/track/" + user()?.data?.spotify?.track_id}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Listen to {user()?.data?.spotify?.song} on Spotify
                        </a>
                        
                    </div>
                </div>
            </>)}
        </div>
    </div>);
}

export default Discord;