import { LitElement, html } from "@polymer/lit-element";
//
class PKLink extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
		this.addEventListener("click", async e => {
			e.preventDefault();
			console.log("KLICK");
		});
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<a href="/"> <slot></slot> </a>
		`;
	}
}
//
window.customElements.define("pk-link", PKLink);
