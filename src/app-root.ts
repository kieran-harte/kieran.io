import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import './components/c-about-me'
import './components/c-contact'
import './components/c-education'
import './components/c-employment-card'
import './components/c-hero'
import './components/c-project-card'
import './components/c-section'
import './components/c-skills'
import { employments, projects, skills } from './data'

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <c-hero></c-hero>
      <!-- <c-section heading="Projects">
        ${projects.map(
        data => html` <c-project-card .data=${data}></c-project-card> `
      )}
      </c-section> -->
      <c-section heading="Employment">
        ${employments.map(
          data => html` <c-employment-card .data=${data}></c-employment-card> `
        )}
      </c-section>
      <!-- <c-section heading="Skills">
        <c-skills .skills=${skills}></c-skills>
      </c-section> -->
      <c-section heading="Education">
        <c-education></c-education>
        <c-contact></c-contact>
      </c-section>
      <!-- <c-section heading="Contact"> </c-section> -->
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
