import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKElementQuote extends LitElement {

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					border-left: 3px solid #0078d4;
					padding: 10px 20px;
					font-style: italic;
					margin-bottom: 16px;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-element-quote", PKElementQuote);
