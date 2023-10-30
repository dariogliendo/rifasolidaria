import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NumberList = ({ numbers }) => {
  const [filter, setFilter] = useState(null)

  const filteredNumbers = numbers.filter(x => {
    if (!filter) return true
    return x.number.toString().includes(filter)
  })

  const humanizeStatus = (value) => {
    switch (value) {
      case 'AVAILABLE': return 'Disponible';
      case 'SOLD': return 'Comprado';
      case 'PENDING': return 'Pendiente de pago'
    }
  }

  return (
    <div>
      <div>
        <span>Buscar números:</span>
        <input type="text" onChange={(e) => setFilter(e.target.value)} />
      </div>
      <ul className='numberList'>
        {filteredNumbers.map(number => <li className={"numberContainer " + number.status.toLowerCase()} key={number.number}>
          <Link to={"/" + number.number}>
            <strong>{number.number}</strong>
            <span>{humanizeStatus(number.status)}</span>
          </Link>
        </li>)}
      </ul>
    </div>
  )
}

export default NumberList