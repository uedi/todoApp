import axios from 'axios'
import { BACKEND_URL } from '../utils/config'
const signupUrl = `${BACKEND_URL}/api/signup`

const signup = async (data) => {
    const response = await axios.post(signupUrl, data, { timeout: 10000 })
    return response.data
}

export default { signup }