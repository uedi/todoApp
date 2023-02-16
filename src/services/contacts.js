import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { header } from "../utils/auth"
const contactsApiUrl = `${BACKEND_URL}/api/contacts`

const getAll = async () => {
    const response = await axios.get(contactsApiUrl, header())
    return response.data
}

const create = async (data) => {
    const response = await axios.post(contactsApiUrl, data, header())
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${contactsApiUrl}/${id}`, header())
    return response.data
}

export default { getAll, create, remove }