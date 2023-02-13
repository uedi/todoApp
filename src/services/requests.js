import axios from "axios"
import { header } from "../utils/auth"
import { BACKEND_URL } from "../utils/config"
const requestsApiUrl = `${BACKEND_URL}/api/requests`

const getAll = async () => {
    const response = await axios.get(requestsApiUrl, header())
    return response.data
}

const replyMembership = async (data) => {
    const response = await axios.post(`${requestsApiUrl}/membership`, data, header())
    return response.data
}

export default { getAll, replyMembership }