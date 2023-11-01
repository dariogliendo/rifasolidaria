import React from 'react'

const TakenNumber = ({ numberData }) => {
  const copy = (e) => {
    navigator.clipboard.writeText(e.target.value)
    alert('Texto copiado!')
  }
  return (

    <>
      {numberData?.status === 'SOLD' &&
        <div>
          <strong>Este número ya fue comprado. Muchas gracias {numberData.soldTo}</strong>
        </div>
      }
      {numberData?.status === 'PENDING' &&
        <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
          <span>Ya se reservó tu número, ya podés hacer la transferencia a</span>
          <div className="alias">
            <span>FERNY.LUCOVACH.UALA</span>
          </div>
          <span>Muchas gracias por tu aporte 💖</span>
          <span>Recordá que el sorteo se hace el día 29 de Noviembre por Loteria de Córdoba</span>
        </div>
      }
    </>
  )
}

export default TakenNumber