import { LitElement, html } from "@polymer/lit-element";
//
class PkContentTitle extends LitElement {
	render() {
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;

					text-align: center;
					font-weight: 700;
					font-size: 100px;
					margin-top: -25px;
					line-height: 120px !important;

					/* THEME LIGHT */
					color: rgba(0, 0, 0, 0.1);
				}
				@media (max-width: 1023px) {
					:host {
						margin-top: 15px;
					}
				}
				@media (max-width: 480px) {
					:host {
						font-size: 54px;
						line-height: 64px !important;
					}
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-title", PkContentTitle);
