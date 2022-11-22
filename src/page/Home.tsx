import React, { useState } from 'react'
import { AmountStickers } from '../components/AmountStickers'
import { Checkboxes, checkboxesType } from '../components/Checkboxes'
import {
  FormStickers,
  HomeContainer,
  NoteContainer,
  FooterFormContainer,
  SubmitButton,
} from './styles'

export function Home() {
  const [checkedBoxes, setCheckedBoxes] = useState<checkboxesType[]>([])
  const [amountStickers, setAmountStickers] = useState<number>(0)
  const [sending, setSending] = useState<boolean>(false)

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

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    setSending(true)

    setTimeout(() => {
      setSending(false)
    }, 3600)
  }

  const submitIsdisabled =
    amountStickers === 0 || checkedBoxes.length === 0 || sending

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
              <SubmitButton
                type="submit"
                disabled={submitIsdisabled}
                sending={sending}
                onClick={(e) => handleSubmit(e)}
              >
                <span className="submit-text">Enviar</span>
                <span className="spinner"></span>
              </SubmitButton>
            </FooterFormContainer>
          </FormStickers>
        </main>
      </div>
    </HomeContainer>
  )
}
