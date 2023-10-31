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
    throw new Error(error)
  }
}

const reserve = async (number, name, telephone, email) => {
  try {
    const { data } = await axiosInstance.put('/numbers/' + number, {
      number: number,
      status: 'PENDING',
      soldTo: name,
      telephone: telephone,
      email: email,
    })
    return data
  } catch (error) {
    alert(error)
  }
}

export default {
  getNumbers,
  getNumber,
  reserve
}