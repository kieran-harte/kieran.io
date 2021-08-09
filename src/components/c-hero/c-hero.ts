import 'components/c-section-links'
import 'components/c-social-links'
import downArrow from 'icons/downArrow'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import s from 'litsass:./c-hero.scss'

@customElement('c-hero')
export class CHero extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`
      <c-section-links></c-section-links>
      <h1>Kieran Harte</h1>
      <h2>Full Stack Web Developer</h2>
      <c-social-links></c-social-links>
      <div
        id="scroll-arrow"
        @click=${() => {
          document
            .querySelector('app-root')
            ?.shadowRoot?.querySelector(`c-section[heading="Projects"]`)
            ?.scrollIntoView({
              behavior: 'smooth',
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
