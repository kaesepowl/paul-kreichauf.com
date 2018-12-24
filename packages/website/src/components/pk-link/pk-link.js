import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKLink extends LitElement {
	static get properties() {
		return {
			path: { type: String },
			active: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		//
		this.path = "/";
		this.active = false;
	}

	render() {
		const { path } = this;
		return html`
			<style>
				${sharedStyle} a {
					text-decoration: none;
					color: var(--pk-link-color, #666);
				}
				:host([active]) a {
					color: var(--pk-link-active-color, #0078d4);
				}
			</style>
			<a href=${path}> <slot></slot> </a>
		`;
	}
}
//
window.customElements.define("pk-link", PKLink);
