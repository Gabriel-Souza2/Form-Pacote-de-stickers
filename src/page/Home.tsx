import { Checkboxes } from '../components/Checkboxes'
import { FormStickers, HomeContainer } from './styles'

export function Home() {
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
            <Checkboxes />
          </FormStickers>
        </main>
      </div>
    </HomeContainer>
  )
}
