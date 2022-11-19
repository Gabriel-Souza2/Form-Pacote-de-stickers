import React, { useState } from 'react'
import { AmountStickersContainer } from './styles'

export function AmountStickers() {
  const [amountStickers, setAmountStickers] = useState(0)
  function handleValueFromInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    e.target.value = ''
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

  const subButtonIsDisabled = amountStickers <= 0
  return (
    <AmountStickersContainer>
      <legend>Quantas Stickers de cada?</legend>
      <button
        data-testid="btn-down"
        disabled={subButtonIsDisabled}
        onClick={handleSubOneSticker}
      >
        <span className="sub"></span>
      </button>
      <input
        className="amount-input"
        data-testid="amount-input"
        type="number"
        value={amountStickers}
        onChange={(e) => handleValueFromInput(e)}
      />
      <button data-testid="btn-up" onClick={handleAddOneMoreSticker}>
        <span className="add"></span>
      </button>
    </AmountStickersContainer>
  )
}
