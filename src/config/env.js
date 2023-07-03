export const ENV = 'local';

export const CORS_API = {
    local: "https://api.allorigins.win/get?url=", 
};

export const CORS_API_RAW = {
    local: "https://api.allorigins.win/raw?url=", 
};

export const API = {
    local: "https://itunes.apple.com", 
};

export const ENDPOINTS = {
    local: {
        podcasts: {
            get: {
                url: "/us/rss/toppodcasts/limit=100/genre=1310/json",
                method: "get",
            },
            getPodcast: {
                url: "/lookup?id=:id&country=US&media=podcast&entity=allPodcastEpisode&limit=20",
                method: "get",
            },
        },
    },
};