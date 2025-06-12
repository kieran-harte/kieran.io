import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import s from './c-section.scss'

@customElement('c-section')
export class CSection extends LitElement {
  static styles = [s]

  @property({ type: String }) heading: string = ''

  constructor() {
    super()
  }

  render() {
    return html`
      <!-- <h2 class="title">${this.heading}</h2> -->
      <slot class="items"></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-section': CSection
  }
}
