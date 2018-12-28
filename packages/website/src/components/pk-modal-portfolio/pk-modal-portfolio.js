import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-element-headline/pk-element-headline";
import "../pk-element-legend/pk-element-legend";
import "../pk-scroller/pk-scroller";
//
class PKModalPortfolio extends LitElement {
	static get properties() {
		return {
			img: { type: String },
			title: { type: String },
			subTitle: { type: String }
		};
	}

	render() {
		const { img, title, subTitle } = this;
		return html`
			${sharedStyle}
			<style>
				:host {
					background-color: white;
					width: 100%;
					height: 100%;
				}
				pk-scroller {
					height: 100%;
					overflow: hidden;
				}
				pk-scroller > div {
					padding: 25px;
					font-size: 14px;
				}
				pk-scroller > div > div {
					text-align: justify;
					padding-top: 20px;
				}
			</style>
			<pk-scroller>
				<pk-image src=${img}></pk-image>
				<div>
					<pk-element-headline>${title}</pk-element-headline>
					<pk-element-legend>${subTitle}</pk-element-legend>
					<div><slot></slot></div>
				</div>
			</pk-scroller>
		`;
	}
}
//
window.customElements.define("pk-modal-portfolio", PKModalPortfolio);
