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
				button {
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
				button:hover {
					background-color: #0078d4;
					border-color: #0078d4;
					color: #fff;
				}
				button:focus {
					border-color: #0078d4;
				}

				button:hover pk-icon {
					color: #fff;
				}
				pk-icon {
					transition: 0.5s;
					font-size: 24px;
					line-height: 24px;
					margin-left: 6px;
					position: relative;
					top: 4px;
				}
			</style>
			<button type="submit">
				${caption} <pk-icon type=${icon}></pk-icon>
			</button>
		`;
	}
}
//
window.customElements.define("pk-form-button", PKFormButton);
