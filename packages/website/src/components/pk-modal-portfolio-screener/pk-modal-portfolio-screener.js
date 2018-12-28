import { html, LitElement } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-modal-portfolio/pk-modal-portfolio";
//
import { getModalItemById } from "../../data/modal-items";
//
class PKModalPortfolioScreener extends LitElement {
	constructor() {
		super();
		this.data = getModalItemById("portfolio-screener");
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
