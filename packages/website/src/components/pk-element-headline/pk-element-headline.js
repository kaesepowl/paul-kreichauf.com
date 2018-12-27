import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKElementHeadline extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					font-size: 16px;
					font-weight: 700;
				}
				@media (max-width: 1023px) {
					:host {
						font-size: 18px;
					}
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-element-headline", PKElementHeadline);
