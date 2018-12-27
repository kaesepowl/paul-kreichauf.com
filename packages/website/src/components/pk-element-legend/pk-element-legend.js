import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKElementLegend extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					font-size: 12px;
					/* THEME LIGHT */
					color: #666;
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
window.customElements.define("pk-element-legend", PKElementLegend);
