import { Company } from '~/models/company'
import api from './api'

export const getCompany = async () => {
  try {
    const response = await api.get('/someEndpoint')
    return response.data as Company
  } catch (error) {
    console.error(error)
  }
}
