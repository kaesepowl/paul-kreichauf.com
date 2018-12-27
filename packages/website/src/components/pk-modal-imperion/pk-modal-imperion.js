import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
import { getPortfolioItemById } from "../../data/portfolio-items";
//
import "../pk-element-headline/pk-element-headline";
import "../pk-element-legend/pk-element-legend";
import "../pk-element-paragraph/pk-element-paragraph";
import "../pk-element-quote/pk-element-quote";
import "../pk-element-list/pk-element-list";
import "../pk-element-list-item/pk-element-list-item";
import "../pk-scroller/pk-scroller";
//
class PKModalImperion extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
		this.data = getPortfolioItemById("imperion")[0];
	}

	render() {
		const { img, title, subTitle } = this.data;
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
				}
				pk-element-paragraph:first-child {
					margin-top: 20px;
				}
			</style>
			<pk-scroller>
				<pk-image src=${img}></pk-image>
				<div>
					<pk-element-headline>${title}</pk-element-headline>
					<pk-element-legend>${subTitle}</pk-element-legend>
					<div>
						<pk-element-paragraph>asdf</pk-element-paragraph>
						<pk-element-paragraph>asdf</pk-element-paragraph>
						<pk-element-quote
							>Nimmt Opi Opium, bringt Opium den Opi
							um</pk-element-quote
						>
						<pk-element-paragraph>asdf</pk-element-paragraph>
						<pk-element-list>
							<pk-element-list-item>item 1</pk-element-list-item>
							<pk-element-list-item>item 1</pk-element-list-item>
							<pk-element-list-item>item 1</pk-element-list-item>
							<pk-element-list-item>item 1</pk-element-list-item>
						</pk-element-list>
						<iframe
							width="100%"
							height="315"
							src="https://www.youtube.com/embed/2mdnALs-tKs"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</pk-scroller>
		`;
	}
}
//
window.customElements.define("pk-modal-imperion", PKModalImperion);
