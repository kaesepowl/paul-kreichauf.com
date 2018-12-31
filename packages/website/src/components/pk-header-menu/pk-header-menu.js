import { html } from "@polymer/lit-element";
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
//
import "../pk-menu/pk-menu";
import "../pk-menu-item/pk-menu-item";
import { getAppPage } from "../../selectors/app";
import { getHeaderMenuItems } from "../../selectors/header";
import { getNavigationOpen } from "../../selectors/navigation";
//
class PKHeaderMenu extends PKConnectedElement {
	static get properties() {
		return {
			open: { type: Boolean, reflect: true },
			activePage: { type: Boolean },
			items: { type: Array }
		};
	}

	constructor() {
		super();
		this.items = [];
		this.activePage = "home";
		this.open = false;
	}

	stateChanged(state) {
		this.items = getHeaderMenuItems(state);
		this.activePage = getAppPage(state);
		this.open = getNavigationOpen(state);
	}

	renderItem(item) {
		const { caption, page, icon } = item;
		const { activePage } = this;
		return html`
			<pk-menu-item
				caption=${caption}
				path=${`/${page}`}
				icon=${icon}
				?active=${page === activePage}
			></pk-menu-item>
		`;
	}

	render() {
		const { items } = this;
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;
				}
				@media (max-width: 1023px) {
					:host {
						position: absolute;
						left: 0;
						top: 50px;
						margin-top: 0;
						width: 100%;
						opacity: 0;
						visibility: hidden;
						text-align: center;
						transition: all 0.3s ease 0s;
						background-color: #d0d0d0;
					}

					:host([open]) {
						opacity: 1;
						visibility: visible;
					}
				}
			</style>
			<pk-menu> ${items.map(item => this.renderItem(item))} </pk-menu>
		`;
	}
}
//
window.customElements.define("pk-header-menu", PKHeaderMenu);
