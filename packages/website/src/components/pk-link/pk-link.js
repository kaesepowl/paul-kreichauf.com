import { LitElement, html } from "@polymer/lit-element";
//
class PKLink extends LitElement {
	static get properties() {
		return {
			path: { type: String }
		};
	}

	constructor() {
		super();
		//
		this.path = "/";
	}

	render() {
		const { path } = this;
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;
				}
				a {
					box-sizing: border-box;
				}
			</style>
			<a href=${path}> <slot></slot> </a>
		`;
	}
}
//
window.customElements.define("pk-link", PKLink);
