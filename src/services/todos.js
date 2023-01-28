import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { header } from "../utils/auth"
const todosApiUrl = `${BACKEND_URL}/api/todos`

const create = async (data) => {
    const response = await axios.post(todosApiUrl, data, header())
    return response.data
}

export default { create }