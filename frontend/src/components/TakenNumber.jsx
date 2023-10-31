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
          <strong>Este número está pendiente de pago. Si sos el comprador, envianos el comprobante por Whatsapp junto con tus datos.</strong>
          <span>Si no pudiste enviar el mensaje anteriormente, aquí lo podés copiar:</span>
          <textarea rows="5" readOnly={true} onClick={copy} value={`Hola, me gustaría comprar el número *${numberData.number}* de la rifa.\n*Nombre:* ${numberData.soldTo}\n*Teléfono:* ${numberData.telephone}\n*Correo electrónico:* ${numberData.email}`}>
          </textarea>
          <span>En breve vamos a confirmar tu compra :)</span>
        </div>
      }
    </>
  )
}

export default TakenNumber