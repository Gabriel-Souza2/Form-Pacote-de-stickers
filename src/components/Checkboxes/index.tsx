import { CheckboxesContaier } from './styles'

export function Checkboxes() {
  return (
    <CheckboxesContaier>
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
    </CheckboxesContaier>
  )
}
