import axios from 'axios'
import { BACKEND_URL } from '../utils/config'
const signupUrl = `${BACKEND_URL}/api/signup`
const loginUrl = `${BACKEND_URL}/api/login`

const signup = async (data) => {
    const response = await axios.post(signupUrl, data, { timeout: 10000 })
    return response.data
}

const login = async (credentials) => {
    const response = await axios.post(loginUrl, credentials, { timeout: 10000 })
    return response.data
}

export default { signup, login }