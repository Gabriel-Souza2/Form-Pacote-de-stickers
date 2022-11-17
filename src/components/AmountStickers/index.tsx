import React, { useState } from 'react'
import { AmountStickersContainer } from './styles'

export function AmountStickers() {
  const [amountStickers, setAmountStickers] = useState(0)

  function handleAddOneMoreSticker(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    setAmountStickers((value) => {
      return (value += 1)
    })
  }
  return (
    <AmountStickersContainer>
      <legend>Quantas Stickers de cada?</legend>
      <button data-testid="btn-down">
        <span className="sub"></span>
      </button>
      <input className="amount-input" type="number" value={amountStickers} />
      <button data-testid="btn-up" onClick={handleAddOneMoreSticker}>
        <span className="add"></span>
      </button>
    </AmountStickersContainer>
  )
}
