import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKCardFooter extends LitElement {
	static get properties() {
		return {};
	}
	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					border-top: 1px solid #00000020;
					text-align: center;
					padding: 10px 0;
					background-color: #d0d0d0;
				}
				.title,
				.subTitle {
					line-height: 24px;
				}
				.title {
					font-size: 18px;
					font-weight: 700;
				}
				.subTitle {
					font-size: 15px;
				}
			</style>
			<div class="title"><slot name="title"></slot></div>
			<div class="subTitle"><slot name="subTitle"></slot></div>
		`;
	}
}
//
window.customElements.define("pk-card-footer", PKCardFooter);
