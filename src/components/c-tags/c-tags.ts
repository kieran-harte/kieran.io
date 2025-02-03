import { html, LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import tag from '../../../public/icons/tag'
import s from './c-tags.scss'

@customElement('c-tags')
export class CTags extends LitElement {
  static styles = [s]

  @property({ type: Array }) tags: string[] | undefined

  render() {
    return html`
      ${this.tags?.length
        ? html`
            ${tag}
            <div class="tags">
              ${this.tags.map(tag => html`<div class="tag">${tag}</div>`)}
            </div>
          `
        : nothing}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-tags': CTags
  }
}
