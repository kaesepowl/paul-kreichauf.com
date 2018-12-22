import { html } from "@polymer/lit-element";
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
import { getHeaderMenuItems } from "../../selectors/header";
//
import "../pk-menu/pk-menu";
import "../pk-menu-item/pk-menu-item";
//
class PKHeaderMenu extends PKConnectedElement {
	static get properties() {
		return {
			open: { type: Boolean }
		};
	}

	constructor() {
		super();
		this.items = [];
		this.open = false;
	}

	stateChanged(state) {
		this.items = getHeaderMenuItems(state);
	}

	renderItem(item) {
		const { caption, path } = item;
		return html`
			<pk-menu-item caption=${caption} path=${path}></pk-menu-item>
		`;
	}

	render() {
		const { items, open } = this;
		return html`
			<style>
				:host {
					display: block;
					position: absolute;
					left: 0;
					top: 50px;
					margin-top: 0;
					width: 100%;
					opacity: 0;
					visibility: hidden;
					text-align: center;
					transition: all 0.3s ease 0s;
				}

				:host([open]) {
					opacity: 1;
					visibility: visible;
				}
			</style>
			<pk-menu> ${items.map(item => this.renderItem(item))} </pk-menu>
		`;
	}
}
//
window.customElements.define("pk-header-menu", PKHeaderMenu);
