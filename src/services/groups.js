import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { header } from "../utils/auth"
const groupsApiUrl = `${BACKEND_URL}/api/groups`

const getAll = async () => {
    const response = await axios.get(groupsApiUrl, header())
    return response.data
}

const create = async (data) => {
    const response = await axios.post(groupsApiUrl, data, header())
    return response.data
}

const addMember = async (id, data) => {
    const response = await axios.post(`${groupsApiUrl}/${id}/members`, data, header())
    return response.data
}

const update = async (id, data) => {
    const response = await axios.put(`${groupsApiUrl}/${id}`, data, header())
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${groupsApiUrl}/${id}`, header())
    return response.data
}

export default { getAll, create, addMember, update, remove }