import { LitElement, html } from "@polymer/lit-element";
//
class PKContent extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
					width: 100%;
					height: 100%;
					background-color: deeppink;
				}

				@media (max-width: 1023px) {
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content", PKContent);
