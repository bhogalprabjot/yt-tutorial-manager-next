import axios from "axios";

const KEY = 'AIzaSyAai-P3YwvSUlu9qRkDj_eBHONsMUGY8_g'
// const KEY = 'aa58632f37msh2629bc914cd638cp17dd93jsndef68a51d45f';
const BASE_URL = "https://www.googleapis.com/youtube/v3/"

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


export default axios.create({
    baseURL: BASE_URL,
    params: {
        part: 'snippet,id',
        maxResults: 30,
        key: KEY
    },
    // headers: {
    //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    //     'X-RapidAPI-Key': 'aa58632f37msh2629bc914cd638cp17dd93jsndef68a51d45f'
    //   }

})