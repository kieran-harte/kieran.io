import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import s from './c-education.scss'

@customElement('c-education')
export class CEducation extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`
      <ul>
        <li>
          <span>2018 - 2021</span>
          <div>
            <h3>Bath Spa University</h3>
            <p>BSc Creative Computing (Web Technologies), First Class</p>
          </div>
        </li>
        <li>
          <span>2015 - 2017</span>
          <div>
            <h3>Hereford Sixth Form College</h3>
            <p>
              A Levels: Computer Science (A), Mathematics (A), Further
              Mathematics (C)
            </p>
          </div>
        </li>
        <li>
          <span>2010 - 2015</span>
          <div>
            <h3>The King's School, Worcester</h3>
            <p>
              GCSEs: 11 subjects, including Further Mathematics (A*),
              Mathematics (A*), Physics (A*), Chemistry (A*), Art and Design
              (A*)
            </p>
          </div>
        </li>
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-education': CEducation
  }
}
