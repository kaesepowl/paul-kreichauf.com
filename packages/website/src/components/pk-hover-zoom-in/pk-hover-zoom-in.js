import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKHoverZoomIn extends LitElement {
	static get properties() {
		return {};
	}
	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					overflow: hidden;
					position: relative;
				}
				::slotted(*) {
					transition: 0.5s;
				}
				:host(:hover) ::slotted(*) {
					transform: scale(1.08);
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-hover-zoom-in", PKHoverZoomIn);
