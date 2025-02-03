import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Employment } from 'src/types'
import calendar from '../../../public/icons/calendar'
import '../c-tags'
import s from './c-employment-card.scss'

@customElement('c-employment-card')
export class CEmploymentCard extends LitElement {
  static styles = [s]

  @property({ type: Object })
  data!: Employment

  render() {
    return html`
      <div class="header">
        ${this.data.logo
          ? html` <img src=${this.data.logo.src} alt=${this.data.logo.alt} /> `
          : html`<div class="freelance">Freelance</div>`}
        <div class="date-container">
          ${calendar}
          <div class="date">
            <p>${this.data.date.startEnd}</p>
            <p>${this.data.date.duration}</p>
          </div>
        </div>
      </div>
      <h1>${this.data.role}</h1>
      <h2>${this.data.company}</h2>
      <p>${this.data.description}</p>
      <c-tags .tags=${this.data.tags}></c-tags>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-employment-card': CEmploymentCard
  }
}
