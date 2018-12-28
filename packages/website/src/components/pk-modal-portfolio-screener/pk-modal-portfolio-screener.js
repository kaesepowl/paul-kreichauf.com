import { html, LitElement } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-modal-portfolio/pk-modal-portfolio";
//
import { getPortfolioItemById } from "../../data/portfolio-items";
//
class PKModalPortfolioScreener extends LitElement {
	static get properties() {
		return {};
	}
	constructor() {
		super();
		this.data = getPortfolioItemById("portfolio-screener")[0];
	}

	render() {
		const { img, title, subTitle } = this.data;
		return html`
			${sharedStyle}
			<pk-modal-portfolio img=${img} title=${title} img=${subTitle}>
				screener
			</pk-modal-portfolio>
		`;
	}
}
//
window.customElements.define(
	"pk-modal-portfolio-screener",
	PKModalPortfolioScreener
);
