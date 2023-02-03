import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { header } from "../utils/auth"
const messagesApiUrl = `${BACKEND_URL}/api/messages`

const sendMessage = async (data) => {
    const response = await axios.post(messagesApiUrl, data, header())
    return response.data
}

export default { sendMessage }