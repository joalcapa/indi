export const ENV = 'local';

export const API = {
    local: 'https://itunes.apple.com/us',
};

export const ENDPOINTS = {
    local: {
        podcasts: {
            get: {
                url: '/rss/toppodcasts/limit=100/genre=1310/json',
                method: 'get',
            },
        },
    },
};