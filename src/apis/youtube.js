import axios from 'axios';

const KEY = "AIzaSyAWv6277ztNXvVKHtgB5n3ICzBRO6i5dLM";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});