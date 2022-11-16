import { useState } from 'react'
import { Checkboxes, checkboxesType } from '../components/Checkboxes'
import { FormStickers, HomeContainer } from './styles'

export function Home() {
  const [checkedBoxes, setCheckedBoxes] = useState<checkboxesType[]>([])
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
          </FormStickers>
        </main>
      </div>
    </HomeContainer>
  )
}
