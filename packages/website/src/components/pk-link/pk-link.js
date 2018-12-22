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
		//
		this.addEventListener("click", async e => {
			e.preventDefault();
			console.log("KLICK");
		});
	}

	render() {
		const { path } = this;
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<a href=${path}> <slot></slot> </a>
		`;
	}
}
//
window.customElements.define("pk-link", PKLink);
