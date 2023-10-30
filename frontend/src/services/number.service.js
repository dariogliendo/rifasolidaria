import axiosInstance from './axiosInstance'

const getNumbers = async () => {
  try {
    const numbers = await axiosInstance.get('/numbers');
    return numbers
  } catch (error) {
    alert(error)
  }
}

export default {
  getNumbers,
}