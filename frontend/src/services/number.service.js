import axiosInstance from './axiosInstance'

const getNumbers = async () => {
  try {
    const { data } = await axiosInstance.get('/numbers');
    return data
  } catch (error) {
    alert(error)
  }
}

const getNumber = async (number) => {
  try {
    const { data } = await axiosInstance.get('/numbers/' + number)
    return data
  } catch (error) {
    alert(error)
  }
}

export default {
  getNumbers,
  getNumber
}