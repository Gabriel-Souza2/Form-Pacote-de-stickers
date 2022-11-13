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
            <fieldset>
              <legend>Quais Stickers?</legend>
              <div className="checkbox-wrapper">
                <input type="checkbox" name="react" id="react" />
                <div className="checkmark">
                  <span className="check"></span>
                </div>

                <label htmlFor="react">React</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" name="vue" id="vue" />
                <div className="checkmark">
                  <span className="check"></span>
                </div>
                <label htmlFor="vue">Vue</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" name="angular" id="angular" />
                <div className="checkmark">
                  <span className="check"></span>
                </div>

                <label htmlFor="angular">Angular</label>
              </div>
            </fieldset>
          </FormStickers>
        </main>
      </div>
    </HomeContainer>
  )
}
