import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKModalImperion extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle} pk-modal-imperion
		`;
	}
}
//
window.customElements.define("pk-modal-imperion", PKModalImperion);
