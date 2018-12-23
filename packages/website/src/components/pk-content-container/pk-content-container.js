import { LitElement, html } from "@polymer/lit-element";
//
class PKContentContainer extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;
					padding: 50px;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-container", PKContentContainer);
