import { Constants } from "../../utilities/constants"
import { END_POINTS } from "../../utilities/endPoints"
import { apiRequest } from "../interceptor/Interceptor"

export const getGifs = (searchValue) => {
    return apiRequest.get(`${END_POINTS.GET_GIFS}?api_key=${Constants.API_KEY}&q=${searchValue}&limit=20`)
}

const api = {
    getGifs
}

export default api;


