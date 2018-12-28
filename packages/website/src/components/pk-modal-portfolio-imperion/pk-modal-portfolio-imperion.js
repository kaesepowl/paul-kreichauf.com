import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
import { getModalItemById } from "../../data/modal-items";
//
import "../pk-element-paragraph/pk-element-paragraph";
import "../pk-element-quote/pk-element-quote";
import "../pk-element-list/pk-element-list";
import "../pk-element-list-item/pk-element-list-item";
import "../pk-modal-portfolio/pk-modal-portfolio";
import "../pk-youtube/pk-youtube";
//
class PKModalPortfolioImperion extends LitElement {
	constructor() {
		super();
		this.data = getModalItemById("portfolio-imperion");
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
				<pk-youtube youtubeid="2mdnALs-tKs"></pk-youtube>
			</pk-modal-portfolio>
		`;
	}
}
//
window.customElements.define(
	"pk-modal-portfolio-imperion",
	PKModalPortfolioImperion
);
