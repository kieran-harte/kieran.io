import codepen from 'icons/codepen'
import github from 'icons/github'
import linkedin from 'icons/linkedin'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import s from 'litsass:./c-social-links.scss'

@customElement('c-social-links')
export class CSocialLinks extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`
      <a href="https://github.com/kieran-harte" target="_blank">${github}</a>
      <a href="https://www.linkedin.com/in/kieran-harte/" target="_blank"
        >${linkedin}</a
      >
      <a href="https://codepen.io/kieran-harte" target="_blank">${codepen}</a>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-social-links': CSocialLinks
  }
}
