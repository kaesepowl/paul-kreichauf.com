import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-modal-portfolio/pk-modal-portfolio";
//
import { getPortfolioItemById } from "../../data/portfolio-items";
//
class PKModalPortfolioCharting extends LitElement {

	constructor() {
		super();
		this.data = getPortfolioItemById("portfolio-charting")[0];
	}

	render() {
		const { img, title, subTitle } = this.data;
		return html`
			${sharedStyle}
			<pk-modal-portfolio img=${img} title=${title} img=${subTitle}>
				charting
			</pk-modal-portfolio>
		`;
	}
}
//
window.customElements.define(
	"pk-modal-portfolio-charting",
	PKModalPortfolioCharting
);
