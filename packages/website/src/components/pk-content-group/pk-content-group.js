import { LitElement, html } from "@polymer/lit-element";
//
class PkContentGroup extends LitElement {
	static get properties() {
		return {
			title: { type: String }
		};
	}

	render() {
		const { title } = this;
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					display: block;
					box-sizing: border-box;
					margin-top: 50px;
					line-height: 1.5em;
				}
				.title {
					font-size: 16px;
					padding: 12px 15px 10px 15px;
					/* THEME LIGHT */
					color: #444;
					background-color: #f0f0f0;
					border-left: 3px solid #0078d4;
				}
				@media (max-width: 1023px) {
					:host {
						margin-top: 30px;
					}
				}
			</style>
			<div class="title">${title}</div>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-group", PkContentGroup);
