import tag from 'icons/tag'
import { html, LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators'
import s from 'litsass:./c-tags.scss'

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
              ${this.tags.map((tag) => html`<div class="tag">${tag}</div>`)}
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
