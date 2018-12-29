import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKForm extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					margin-top: 20px;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-form", PKForm);
