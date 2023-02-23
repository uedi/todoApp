import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { header } from "../utils/auth"
const messagesApiUrl = `${BACKEND_URL}/api/messages`

const sendMessage = async (data) => {
    const response = await axios.post(messagesApiUrl, data, header())
    return response.data
}

const getGroupMessages = async (id) => {
    const response = await axios.get(`${BACKEND_URL}/api/groups/${id}/messages`, header())
    return response.data
}

const deleteMessage = async (id) => {
    const response = await axios.delete(`${messagesApiUrl}/${id}`, header())
    return response.data
}

export default { sendMessage, getGroupMessages, deleteMessage }