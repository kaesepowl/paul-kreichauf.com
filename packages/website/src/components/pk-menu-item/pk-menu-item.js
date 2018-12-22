import { LitElement, html } from "@polymer/lit-element";
//
class PKMenuItem extends LitElement {
	static get properties() {
		return {
			caption: { type: String }
		};
	}

	render() {
		const { caption } = this;
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<div>${caption}</div>
		`;
	}
}
//
window.customElements.define("pk-menu-item", PKMenuItem);
