import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import s from 'litsass:./c-about-me.scss'

@customElement('c-about-me')
export class CAboutMe extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`<p>
        I'm a full-stack web developer currently looking for full-time
        employment. I recently graduated from Bath Spa University with a First
        in Creative Computing (Web Technologies).
      </p>
      <br />
      <p>I am passionate about:</p>
      <ul>
        <li>Using JS/TS to create native feeling web apps</li>
        <li>
          Creating resuable web components (especially with
          <a href="https://lit.dev">Lit</a>)
        </li>
        <li>Self teaching and lifelong learning</li>
      </ul>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-about-me': CAboutMe
  }
}
