import Axios from 'axios'

const setAuthToken = async (token) => {
  Axios.defaults.headers.common['Authorization'] = token
}

export { setAuthToken }
