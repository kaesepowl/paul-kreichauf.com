import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKCardBody extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					border-top: 1px solid #00000020;
					text-align: justify;
					padding: 10px;
					font-size: 15px;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-card-body", PKCardBody);
