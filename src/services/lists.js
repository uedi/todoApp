import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { header } from "../utils/auth"
const listsApiUrl = `${BACKEND_URL}/api/lists`

const getAll = async () => {
    const response = await axios.get(listsApiUrl, header())
    return response.data
}

const create = async (data) => {
    const response = await axios.post(listsApiUrl, data, header())
    return response.data
}

const update = async (id, data) => {
    const response = await axios.put(`${listsApiUrl}/${id}`, data, header())
    return response.data
}

export default { getAll, create, update }