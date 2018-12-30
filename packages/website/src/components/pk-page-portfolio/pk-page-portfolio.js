import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-content-title/pk-content-title";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-filter-group/pk-content-filter-group";
import "../pk-image/pk-image";
import "../pk-card-image/pk-card-image";
import "../pk-card-footer/pk-card-footer";
import "../pk-card/pk-card-new";
import "../pk-link/pk-link";
import "../pk-link-icon/pk-link-icon";
import "../pk-hover-zoom-in/pk-hover-zoom-in";
//
import { getAppPage, getAppSubPages } from "../../selectors/app";
import { getPortfolioItems } from "../../selectors/portfolio";
import { updateItems } from "../../actions/portfolio";
//
class PKPagePortfolio extends PKPage {
	static get properties() {
		return {
			page: { type: String },
			filter: { type: String },
			items: { type: Array }
		};
	}

	updated(changeProps) {
		super.updated(changeProps);
		if (changeProps.has("filter")) {
			this.dispatchAction(updateItems(this.filter));
		}
	}

	stateChanged(state) {
		super.stateChanged(state);
		this.page = getAppPage(state);
		const [subPage] = getAppSubPages(state);
		this.filter = subPage || null;
		this.items = getPortfolioItems(state);
	}

	renderItem(item, filter) {
		const { id, title, subTitle, img } = item;
		const filterPath = filter ? `/${filter}` : "";
		return html`
			<pk-card-new>
				<pk-hover-zoom-in>
					<pk-link-icon
						type="music"
						path=${`/portfolio${filterPath}/modal-${id}`}
					>
						<pk-card-image>
							<pk-image src=${img}></pk-image>
						</pk-card-image>
					</pk-link-icon>
				</pk-hover-zoom-in>
				<pk-card-footer>
					<pk-link slot="title">${title}</pk-link>
					<span slot="subTitle">${subTitle}</span>
				</pk-card-footer>
			</pk-card-new>
		`;
	}

	renderItems(items, filter) {
		return html`
			${items.map(item => this.renderItem(item, filter))}
		`;
	}

	render() {
		const { page, filter, items } = this;
		const content = html`
			${sharedStyle}
			<style>
				pk-content-container {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
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
					margin-bottom: 15px;
				}
				pk-content-filter-group pk-link {
					margin-left: 15px;
					font-weight: 600;
				}
				@media (max-width: 768px) {
					pk-content-container {
						grid-template-columns: 1fr 1fr;
						grid-column-gap: 16px;
						grid-template-areas: "Title Title" "Desc Desc" "Filter Filter";
					}
				}
			</style>
			<pk-content-title>PORTFOLIO</pk-content-title>
			<pk-content-desc> My <b>Best Works</b> </pk-content-desc>
			<pk-content-filter-group>
				<pk-link path=${`/${page}`} ?active=${filter === null}>
					All
				</pk-link>
				<pk-link
					path=${`/${page}/coding`}
					?active=${filter === "coding"}
					>Coding</pk-link
				>
				<pk-link
					path=${`/${page}/mixes-audio`}
					?active=${filter === "mixes-audio"}
				>
					Mixes Audio
				</pk-link>
				<pk-link
					path=${`/${page}/mixes-video`}
					?active=${filter === "mixes-video"}
				>
					Mixes Video
				</pk-link>
			</pk-content-filter-group>
			${this.renderItems(items, filter)}
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-portfolio", PKPagePortfolio);
