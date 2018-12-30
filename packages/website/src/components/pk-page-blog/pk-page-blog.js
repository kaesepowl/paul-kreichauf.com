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
import { getAppPage } from "../../selectors/app";
import { getBlogItems } from "../../selectors/blog";
import { updateItems } from "../../actions/blog";
//
class PKPageBlog extends PKPage {
	static get properties() {
		return {
			items: { type: Array }
		};
	}

	stateChanged(state) {
		super.stateChanged(state);
		this.items = getBlogItems(state);
	}

	firstUpdated(props) {
		super.firstUpdated(props);
		this.dispatchAction(updateItems());
	}

	renderItem(item, filter) {
		const { id, title, subTitle, img } = item;
		const filterPath = filter ? `/${filter}` : "";
		return html`
			<pk-card-new>
				<pk-hover-zoom-in>
					<pk-link-icon
						type="music"
						path=${`/blog${filterPath}/modal-${id}`}
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
		const { filter, items } = this;
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
					grid-template-areas: "Title Title Title" "Desc Desc Desc";
				}
				pk-content-title {
					grid-area: Title;
				}
				pk-content-desc {
					grid-area: Desc;
				}
				@media (max-width: 768px) {
					pk-content-container {
						grid-template-columns: 1fr 1fr;
						grid-column-gap: 16px;
						grid-template-areas: "Title Title" "Desc Desc";
					}
				}
			</style>
			<pk-content-title>BLOG</pk-content-title>
			<pk-content-desc>
				Benefit from my <b>Learnings</b>
			</pk-content-desc>
			${this.renderItems(items, filter)}
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-blog", PKPageBlog);
