import { LitElement, html } from "@polymer/lit-element";
//
class PkContentDesc extends LitElement {
	render() {
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;

					font-size: 19px;
					text-align: center;
					line-height: 24px;
					margin-top: -43px;

					/* THEME LIGHT */
					color: #666;
				}
				b {
					color: #0078d4;
					font-weight: 700;
				}
				@media (max-width: 480px) {
					:host {
						margin-top: -28px;
					}
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-desc", PkContentDesc);
