import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKElementParagraph extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					margin-top: 0;
					margin-bottom: 1rem;
				}
				@media (max-width: 1023px) {
					:host {
						font-size: 15px;
					}
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-element-paragraph", PKElementParagraph);
