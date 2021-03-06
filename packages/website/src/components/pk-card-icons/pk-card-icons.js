import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKCardIcons extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-card-icons", PKCardIcons);