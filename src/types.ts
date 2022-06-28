export interface Presence {
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    activities: Array<Activity>;
    discord_status: string;
    spotify: Spotify | null;
    discord_user: Discord;
    kv: {
      location: string;
    },
  }
  
  export interface HTTPResponse {
    success: boolean;
    data: Presence | undefined;
  }
  
  interface Spotify {
    track_id: string;
    timestamps: {
      start: number;
      end: number;
    },
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  }
  
  interface Discord {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar: string;
  }
  
  interface Activity {
    type: number;
    timestamps: {
      start: number;
      end: number;
    },
    sync_id?: string;
    state?: string;
    session_id?: string;
    party?: {
      id: string;
    },
    name: string;
    id: string;
    flags?: number;
    details?: string;
    created_at: number;
    application_id?: number;
    assets: {
      small_text?: string;
      small_image?: number;
      large_text?: string;
      large_image?: number;
    }
  }

export interface Repositories {
  "id": number,
  "node_id": string,
  "name": string,
  "full_name": string,
  "private": false,
  "owner": {
    "login": string,
    "id": number,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean
  },
  "html_url": string,
  "description": string,
  "fork": boolean,
  "url": string,
  "forks_url": string,
  "keys_url": string,
  "collaborators_url": string,
  "teams_url": string,
  "hooks_url": string,
  "issue_events_url": string,
  "events_url": string,
  "assignees_url": string,
  "branches_url": string,
  "tags_url": string,
  "blobs_url": string,
  "git_tags_url": string,
  "git_refs_url": string,
  "trees_url": string,
  "statuses_url": string,
  "languages_url": string,
  "stargazers_url": string,
  "contributors_url": string,
  "subscribers_url": string,
  "subscription_url": string,
  "commits_url": string,
  "git_commits_url": string,
  "comments_url": string,
  "issue_comment_url": string,
  "contents_url": string,
  "compare_url": string,
  "merges_url": string,
  "archive_url": string,
  "downloads_url": string,
  "issues_url": string,
  "pulls_url": string,
  "milestones_url": string,
  "notifications_url": string,
  "labels_url": string,
  "releases_url": string,
  "deployments_url": string,
  "created_at": string,
  "updated_at": string,
  "pushed_at": string,
  "git_url": string,
  "ssh_url": string,
  "clone_url": string,
  "svn_url": string,
  "homepage": string,
  "size": number,
  "stargazers_count": number,
  "watchers_count": number,
  "language": string,
  "has_issues": boolean,
  "has_projects": boolean,
  "has_downloads": boolean,
  "has_wiki": boolean,
  "has_pages": boolean,
  "forks_count": number,
  "mirror_url": any | null,
  "archived": boolean,
  "disabled": boolean,
  "open_issues_count": number,
  "license": any | null,
  "allow_forking": boolean,
  "is_template": boolean,
  "web_commit_signoff_required": boolean,
  "topics": Array<string>, 
  "visibility": string,
  "forks": number,
  "open_issues": number,
  "watchers": number,
  "default_branch": string
}