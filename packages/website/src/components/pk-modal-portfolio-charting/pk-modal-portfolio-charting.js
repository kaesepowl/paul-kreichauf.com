import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-modal-portfolio/pk-modal-portfolio";
//
import { getModalItemById } from "../../data/modal-items";
//
class PKModalPortfolioCharting extends LitElement {
	constructor() {
		super();
		this.data = getModalItemById("portfolio-charting");
	}

	render() {
		const { img, title, subTitle } = this.data;
		return html`
			${sharedStyle}
			<pk-modal-portfolio img=${img} title=${title} img=${subTitle}>
			</pk-modal-portfolio>
		`;
	}
}
//
window.customElements.define(
	"pk-modal-portfolio-charting",
	PKModalPortfolioCharting
);
