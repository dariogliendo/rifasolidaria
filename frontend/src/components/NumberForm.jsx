import React, { useState } from 'react'
import numberService from '../services/number.service'
import axios from 'axios'

const NumberForm = ({ number, setNumberData }) => {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')

  const confirm = async (e) => {
    e.preventDefault()
    const data = await numberService.reserve(number, name, telephone, email)
    setNumberData(data)
    window.open(link, "_blank")
  }

  return (
    <>
      <form>
        <div className="formElement">
          <label htmlFor="name">Nombre: </label>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formElement">
          <label htmlFor="telephone">Teléfono: </label>
          <input type="text" name="telephone" onChange={(e) => setTelephone(e.target.value)}></input>
        </div>
        <div className="formElement">
          <label htmlFor="email">Correo electrónico: </label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="status">
          {
            !(name && (telephone || email))
              ? <span>Por favor complete la información solicitada</span>
              : ''
          }
        </div>
        <button onClick={confirm} disabled={!(name && (telephone || email))}>Continuar</button>
      </form>
    </>
  )
}

export default NumberForm