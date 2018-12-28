import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
import { getPortfolioItemById } from "../../data/portfolio-items";
//
import "../pk-element-paragraph/pk-element-paragraph";
import "../pk-element-quote/pk-element-quote";
import "../pk-element-list/pk-element-list";
import "../pk-element-list-item/pk-element-list-item";
import "../pk-modal-portfolio/pk-modal-portfolio";
//
class PKModalPortfolioImperion extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
		this.data = getPortfolioItemById("portfolio-imperion")[0];
	}

	render() {
		const { img, title, subTitle } = this.data;
		return html`
			${sharedStyle}
			<style>
				:host {
					height: 100%;
				}
			</style>
			<pk-modal-portfolio img=${img} title=${title} img=${subTitle}>
				<pk-element-paragraph>asdf</pk-element-paragraph>
				<pk-element-paragraph>asdf</pk-element-paragraph>
				<pk-element-quote
					>Nimmt Opi Opium, bringt Opium den Opi um</pk-element-quote
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
			</pk-modal-portfolio>
		`;
	}
}
//
window.customElements.define("pk-modal-portfolio-imperion", PKModalPortfolioImperion);
