import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-content-title/pk-content-title";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-group/pk-content-group";
import "../pk-topic-education/pk-topic-education";
import "../pk-topic-experience/pk-topic-experience";
import "../pk-topic-skills-coding/pk-topic-skills-coding";
import "../pk-topic-skills-infrastructure/pk-topic-skills-infrastructure";
//
class PKPagePortfolio extends PKPage {
	static get properties() {
		return {};
	}

	render() {
		const content = html`
			${sharedStyle}
			<style>
				pk-content-container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-column-gap: 30px;
					grid-row-gap: 0px;
					justify-items: stretch;
					align-items: stretch;
					grid-template-areas: "Title Title" "Desc Desc";
				}
				pk-content-title {
					grid-area: Title;
				}
				pk-content-desc {
					grid-area: Desc;
				}
			</style>
			<pk-content-title>PORTFOLIO</pk-content-title>
			<pk-content-desc>
				My <b>Best Works</b>
			</pk-content-desc>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-portfolio", PKPagePortfolio);
