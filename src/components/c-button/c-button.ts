import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators'
import s from 'litsass:./c-button.scss'

@customElement('c-button')
export class Button extends LitElement {
  constructor() {
    super()
  }

  static styles = [s]

  @property({ type: String })
  private text: string = 'button'

  render() {
    return html` <button>${this.text}</button> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-button': Button
  }
}
