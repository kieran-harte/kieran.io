import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import s from './c-about-me.scss'

@customElement('c-about-me')
export class CAboutMe extends LitElement {
  static styles = [s]

  constructor() {
    super()
  }

  render() {
    return html`<p>
      I'm an experienced Senior Web Developer specializing in creating
      high-performance, interactive web applications. Currently working as a
      Senior Web Developer at Oxa, focusing on autonomous vehicle 3D mapping
      tools. I'm passionate about leveraging web technologies to create
      native-feeling applications and expanding my skill set through
      self-directed learning. With a First Class degree in Creative Computing
      from Bath Spa University and a background in freelance projects, I bring a
      well-rounded skill set, including front-end expertise, 3D web development,
      and proficiency across multiple languages and frameworks.
    </p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'c-about-me': CAboutMe
  }
}
