import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import downArrow from '../../../public/icons/downArrow'
import '../c-section-links'
import '../c-social-links'
import styles from './c-hero.scss'

@customElement('c-hero')
export class CHero extends LitElement {
  static styles = styles

  constructor() {
    super()
  }

  render() {
    return html`
      <c-section-links></c-section-links>
      <h1>Kieran Harte</h1>
      <h2>Senior Web Developer</h2>
      <c-social-links></c-social-links>
      <div
        id="scroll-arrow"
        @click=${() => {
          document
            .querySelector('app-root')
            ?.shadowRoot?.querySelector(`c-section[heading="Projects"]`)
            ?.scrollIntoView({
              behavior: 'smooth'
            })
        }}
      >
        ${downArrow}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-hero': CHero
  }
}
