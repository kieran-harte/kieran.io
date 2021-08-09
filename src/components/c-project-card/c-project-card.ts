import 'components/c-tags'
import github from 'icons/github'
import youtube from 'icons/youtube'
import { html, LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators'
import s from 'litsass:./c-project-card.scss'
import { Project } from 'src/types'

@customElement('c-project-card')
export class CProjectCard extends LitElement {
  static styles = [s]

  @property({ type: Object }) data!: Project

  render() {
    return html`
      <img src="${this.data.images[0].src}" alt="${this.data.images[0].alt}" />
      <div class="top-bar">
        <h3>${this.data.heading}</h3>
        <div class="links">
          ${this.data.links?.github
            ? html`
                <a href=${this.data.links.github} target="_blank">${github}</a>
              `
            : nothing}
          ${this.data.links?.youtube
            ? html`
                <a href=${this.data.links.youtube} target="_blank"
                  >${youtube}</a
                >
              `
            : nothing}
        </div>
      </div>
      <p class="description">${this.data.description}</p>
      <div class="bottom-bar">
        <c-tags .tags=${this.data.tags}></c-tags>
        ${this.data.action?.url
          ? html`
              <a href=${this.data.action.url} target="_blank"
                ><button class="action">
                  ${this.data.action.icon}${this.data.action.text}
                </button></a
              >
            `
          : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-project-card': CProjectCard
  }
}
