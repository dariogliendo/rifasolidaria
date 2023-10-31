import React, { useEffect, useState } from 'react'
import numberService from '../services/number.service'
import { useParams } from 'react-router-dom'
import NumberForm from './NumberForm'
import TakenNumber from './TakenNumber'

const NumberDetail = () => {
  const { number } = useParams()
  const [numberData, setNumberData] = useState(null)

  useEffect(() => {
    const getNumberDetails = async () => {
      try {
        const data = await numberService.getNumber(number)
        setNumberData(data)
      } catch (error) {
        if (error.message.includes('404')) return;
        alert(error)
      }
    }

    getNumberDetails()
  }, [])

  return (
    <div>
      {
        numberData
          ? 
          <>
            <TakenNumber numberData={numberData}/>
          </>
          : 
          <>
            <span>El número {number} todavía está disponible</span>
            <NumberForm number={number} setNumberData={setNumberData}/>
          </>
      }
    </div >
  )
}

export default NumberDetail