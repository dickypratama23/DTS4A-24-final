import axios from "axios";

export const DEFAULT_PARAMS = {
    sortBy:"popularity",
}

const newsApiInstance = axios.create({
    headers: {
        "X-Api-Key" : process.env.REACT_APP_NEWS_API_KEY
    },
    baseURL: "https://newsapi.org/v2",
})

export default newsApiInstance