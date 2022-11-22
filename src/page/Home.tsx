import { useState } from 'react'
import { AmountStickers } from '../components/AmountStickers'
import { Checkboxes, checkboxesType } from '../components/Checkboxes'
import {
  FormStickers,
  HomeContainer,
  NoteContainer,
  FooterFormContainer,
} from './styles'

export function Home() {
  const [checkedBoxes, setCheckedBoxes] = useState<checkboxesType[]>([])
  const [amountStickers, setAmountStickers] = useState<number>(0)

  function handleCheckedBoxes(type: checkboxesType) {
    const isAlreadyChecked = checkedBoxes.find(
      (checkedBoxe) => checkedBoxe === type,
    )

    let newChekedBoxes = []
    if (isAlreadyChecked) {
      newChekedBoxes = checkedBoxes.filter((checkedBox) => checkedBox !== type)
    } else {
      newChekedBoxes = [...checkedBoxes, type]
    }

    setCheckedBoxes(newChekedBoxes)
  }

  function handleChangeValueAmountStickers(value: number) {
    setAmountStickers(value)
  }

  const submitIsdisabled = amountStickers === 0 || checkedBoxes.length === 0

  return (
    <HomeContainer>
      <div className="content-container">
        <header>
          <div className="title-wrapper">
            <h1>
              <span>
                Formulário <br /> para compra de
              </span>
              <span>Pacote de Stickers</span>
            </h1>
          </div>
        </header>
        <main>
          <FormStickers>
            <Checkboxes onCheckedCheckboxes={handleCheckedBoxes} />
            <AmountStickers onChange={handleChangeValueAmountStickers} />
            <NoteContainer>
              <legend>Observações:</legend>
              <textarea name="note" id="note"></textarea>
            </NoteContainer>

            <FooterFormContainer>
              <button type="submit" disabled={submitIsdisabled}>
                Enviar
              </button>
            </FooterFormContainer>
          </FormStickers>
        </main>
      </div>
    </HomeContainer>
  )
}
