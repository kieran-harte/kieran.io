import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators'
import s from 'litsass:./c-skills.scss'
import { Skill } from 'src/types'

@customElement('c-skills')
export class CSkills extends LitElement {
  static styles = [s]

  @property({ type: Array }) skills!: Skill[]

  render() {
    return html`
      ${this.skills.map(
        (skill) => html`
          <div class="skill"><img src=${skill.icon} />${skill.name}</div>
        `
      )}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-skills': CSkills
  }
}
