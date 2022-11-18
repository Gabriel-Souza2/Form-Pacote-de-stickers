import React, { useState } from 'react'
import { AmountStickersContainer } from './styles'

export function AmountStickers() {
  const [amountStickers, setAmountStickers] = useState(0)
  function handleValueFromInput(value: string) {
    setAmountStickers(Number(value))
  }
  function handleAddOneMoreSticker(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    setAmountStickers((value) => {
      return (value += 1)
    })
  }

  function handleSubOneSticker(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    if (amountStickers > 0) {
      setAmountStickers((value) => {
        return (value -= 1)
      })
    }
  }
  return (
    <AmountStickersContainer>
      <legend>Quantas Stickers de cada?</legend>
      <button data-testid="btn-down" onClick={handleSubOneSticker}>
        <span className="sub"></span>
      </button>
      <input
        className="amount-input"
        data-testid="amount-input"
        type="number"
        value={amountStickers}
        onChange={(e) => handleValueFromInput(e.target.value)}
      />
      <button data-testid="btn-up" onClick={handleAddOneMoreSticker}>
        <span className="add"></span>
      </button>
    </AmountStickersContainer>
  )
}
