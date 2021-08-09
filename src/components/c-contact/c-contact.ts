import email from 'icons/email'
import phone from 'icons/phone'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import s from 'litsass:./c-contact.scss'

@customElement('c-contact')
export class CContact extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`
      <ul>
        <li>${phone}<a href="tel:+447484724735">07484724735</a></li>
        <li>${email}<a href="mailto:work@kieran.io">work@kieran.io</a></li>
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-contact': CContact
  }
}
