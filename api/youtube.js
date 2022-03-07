import axios from "axios";
const KEY = 'AIzaSyAai-P3YwvSUlu9qRkDj_eBHONsMUGY8_g'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 30,
        key: KEY
    }

})