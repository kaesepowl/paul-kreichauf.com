import { LitElement, html } from "@polymer/lit-element";
//
class PkContentTitle extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;

					text-align: center;
					font-weight: 700;
					font-size: 100px;
					line-height: 120px;
					margin-top: -25px;

					/* THEME LIGHT */
					color: rgba(0, 0, 0, 0.1);
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-title", PkContentTitle);
