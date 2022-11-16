import { AmountStickersContainer } from './styles'

export function AmountStickers() {
  return (
    <AmountStickersContainer>
      <legend>Quantas Stickers de cada?</legend>
      <button data-testid="btn-down">
        <span className="sub"></span>
      </button>
      <input className="amount" type="text" defaultValue={0} />
      <button data-testid="btn-up">
        <span className="add"></span>
      </button>
    </AmountStickersContainer>
  )
}
