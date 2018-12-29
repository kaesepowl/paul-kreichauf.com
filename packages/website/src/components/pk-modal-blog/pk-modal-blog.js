import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-image/pk-image";
import "../pk-scroller/pk-scroller";
import "../pk-element-headline/pk-element-headline";
import "../pk-element-legend/pk-element-legend";
//
import { getModalItemById } from "../../data/modal-items";
import { getHtmlByMarkdown } from "../../data/markdown";
//
class PKModalBlog extends LitElement {
	static get properties() {
		return {
			modalId: { type: String, reflect: true },
			content: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.data = null;
		this.content = ``;
	}

	async shouldUpdate() {
		this.data = getModalItemById(this.modalId);
		if (this.data !== null) {
			this.content = await getHtmlByMarkdown(this.data.md);
		}
		return this.data !== null;
	}

	updated(props) {
		if (props.has("content")) {
			const contentElement = this.shadowRoot.getElementById("content");
			contentElement.innerHTML = this.content;
		}
	}

	render() {
		const { img, title, subTitle } = this.data;
		return html`
			${sharedStyle}
			<style>
				:host {
					background-color: #ffffff;
					width: 100%;
					height: 100%;
				}
				pk-image {
					width: 100%;
				}
				pk-scroller {
					height: 100%;
					overflow: hidden;
				}
				pk-scroller > div {
					padding: 25px;
					font-size: 14px;
				}
				pk-scroller > div > div {
					text-align: justify;
					padding-top: 20px;
				}
			</style>
			<pk-scroller>
				<pk-image src=${img}></pk-image>
				<div id="content"></div>
			</pk-scroller>
		`;
	}
}
//
window.customElements.define("pk-modal-blog", PKModalBlog);
