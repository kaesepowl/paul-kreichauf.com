import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-icon/pk-icon";
//
class PKFormButton extends LitElement {
	static get properties() {
		return {
			caption: { type: String },
			icon: { type: String }
		};
	}

	render() {
		const { caption, icon } = this;
		return html`
			<style>
				:host {
					display: block;
				}
				::slotted(button) {
					box-sizing: border-box;
					outline: none;

					font-weight: bold;
					font-size: 16px;
					text-decoration: none;
					height: 45px;
					min-width: 45px;
					line-height: 43px;
					text-align: center;
					display: inline-block;
					padding: 0 25px;
					cursor: pointer;
					border-radius: 50px;
					transition: 0.5s;

					border: 1px solid #e5e5e5;
					color: #444;
					background-color: transparent;
				}
				::slotted(button:hover) {
					background-color: #0078d4;
					border-color: #0078d4;
					color: #fff;
				}
				::slotted(button:focus) {
					border-color: #0078d4;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-form-button", PKFormButton);
