import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import s from 'litsass:./c-section-links.scss'

@customElement('c-section-links')
export class CSectionLinks extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  scrollToHeading(heading: string) {
    document
      .querySelector('app-root')
      ?.shadowRoot?.querySelector(`c-section[heading="${heading}"]`)
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  render() {
    return html`<nav>
      <ul>
        <li
          @click=${() => {
            this.scrollToHeading('Projects')
          }}
        >
          Projects
        </li>
        <li
          @click=${() => {
            this.scrollToHeading('About Me')
          }}
        >
          About
        </li>
        <li
          @click=${() => {
            this.scrollToHeading('Contact')
          }}
        >
          Contact
        </li>
      </ul>
    </nav>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-section-links': CSectionLinks
  }
}
