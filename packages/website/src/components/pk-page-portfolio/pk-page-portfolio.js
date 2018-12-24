import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-content-title/pk-content-title";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-filter-group/pk-content-filter-group";
//
import { getAppPage, getAppSubPages } from "../../selectors/app";
//
class PKPagePortfolio extends PKPage {
	static get properties() {
		return {
			page: { type: String },
			subPage: { type: String }
		};
	}

	stateChanged(state) {
		this.page = getAppPage(state);
		const [subPage] = getAppSubPages(state);
		this.subPage = subPage || null;
	}

	render() {
		const { page, subPage } = this;
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
					grid-template-areas: "Title Title Title" "Desc Desc Desc" "Filter Filter Filter";
				}
				pk-content-title {
					grid-area: Title;
				}
				pk-content-desc {
					grid-area: Desc;
				}
				pk-content-filter-group {
					grid-area: Filter;
				}
				pk-content-filter-group pk-link {
					margin-left: 15px;
					font-weight: 600;
				}
			</style>
			<pk-content-title>PORTFOLIO</pk-content-title>
			<pk-content-desc> My <b>Best Works</b> </pk-content-desc>
			<pk-content-filter-group>
				<pk-link path=${`/${page}`} ?active=${subPage === null}>
					All
				</pk-link>
				<pk-link
					path=${`/${page}/coding`}
					?active=${subPage === "coding"}
					>Coding</pk-link
				>
				<pk-link
					path=${`/${page}/mixes-audio`}
					?active=${subPage === "mixes-audio"}
				>
					Mixes Audio
				</pk-link>
				<pk-link
					path=${`/${page}/mixes-video`}
					?active=${subPage === "mixes-video"}
				>
					Mixes Video
				</pk-link>
			</pk-content-filter-group>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-portfolio", PKPagePortfolio);
