import Axios from 'axios'
import config from './config'
import { setAuthToken } from './setAuthToken'
import { getAuthToken } from '../../utils/localStorageItems'

const token = getAuthToken()

export const getApi = async (action, host) => {
  try {
    if (host) {
      Axios.defaults.headers.common['Origin'] = host
    }
    let apiUrl = `${config.serverURL}${action}`
    const response = await Axios.get(apiUrl)

    return response?.data
  } catch (error) {
    return error.response?.data
  }
}

export const postApi = async (action, data) => {
  try {
    if (token) {
      await setAuthToken('Bearer ' + token)
    }
    let apiUrl = `${config.serverURL}${action}`
    const response = await Axios.post(apiUrl, data)
    return response?.data
  } catch (error) {
    return error?.response?.data
  }
}

export const putApi = async (action, data) => {
  try {
    const response = await Axios.put(`${config.serverURL}${action}`, data)
    return response?.data
  } catch (error) {
    return error.response?.data
  }
}

export const postFormData = async (action, formData) => {
  try {
    const data = new FormData()

    data.append('file', formData)
    const response = await Axios.post(`${config.serverURL}${action}`, data)
    return response?.data
  } catch (error) {
    return error.response?.data
  }
}
