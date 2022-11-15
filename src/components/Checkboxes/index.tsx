import { CheckboxesContaier } from './styles'

export type checkboxType = 'react' | 'vue' | 'angular'

interface CheckboxesProps {
  onCheckedCheckboxes: (checkbox: checkboxType) => void
}

export function Checkboxes({ onCheckedCheckboxes }: CheckboxesProps) {
  function handleChecked(type: checkboxType) {
    onCheckedCheckboxes(type)
  }

  return (
    <CheckboxesContaier>
      <legend>Quais Stickers?</legend>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="react"
          id="react"
          onChange={() => handleChecked('react')}
        />
        <div className="checkmark">
          <span className="check"></span>
        </div>

        <label htmlFor="react">React</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="vue"
          id="vue"
          onChange={() => handleChecked('vue')}
        />
        <div className="checkmark">
          <span className="check"></span>
        </div>
        <label htmlFor="vue">Vue</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="angular"
          id="angular"
          onChange={() => handleChecked('angular')}
        />
        <div className="checkmark">
          <span className="check"></span>
        </div>

        <label htmlFor="angular">Angular</label>
      </div>
    </CheckboxesContaier>
  )
}
