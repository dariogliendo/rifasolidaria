import React, { useEffect, useState } from 'react'
import numberService from '../services/number.service'
import { useParams } from 'react-router-dom'

const NumberDetail = () => {
  const { number } = useParams()
  const [numberData, setNumberData] = useState(null)

  useEffect(() => {
    const getNumberDetails = async () => {
      const data = await numberService.getNumber(number)
      setNumberData(data)
    }

    getNumberDetails()
  }, [])

  return (
    <div>
      <span>{numberData.number}</span>
      <span>{numberData.status}</span>
    </div>
  )
}

export default NumberDetail