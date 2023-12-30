import api from "../services/apiMethods/api"

const useGifs = () => {

    const getGifs = (val) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await api.getGifs(val)
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    return { getGifs }
}

export default useGifs