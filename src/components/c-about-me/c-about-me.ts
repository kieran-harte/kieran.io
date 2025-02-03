import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import s from './c-about-me.scss'

@customElement('c-about-me')
export class CAboutMe extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`<p>
        I have a degree in Creative Computing (Web Technologies) from Bath Spa
        University and I'm currently building web apps as a senior web developer
        at <a href="https://www.oxa.tech/">Oxa</a> 🚙
      </p>
      <br />
      <p>I am passionate about:</p>
      <ul>
        <li>Using web technologies to create native feeling web apps</li>
        <li>
          Creating reusable web components (especially with
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
