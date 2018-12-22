import { html } from "@polymer/lit-element";
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
import { getHeaderMenuItems } from "../../selectors/header";
//
import "../pk-menu/pk-menu";
import "../pk-menu-item/pk-menu-item";
//
class PKHeaderMenu extends PKConnectedElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
		this.items = [];
	}

	stateChanged(state) {
		this.items = getHeaderMenuItems(state);
	}

	renderItem(item) {
		const { caption } = item;
		return html`
			<pk-menu-item caption=${caption}></pk-menu-item>
		`;
	}

	render() {
		const { items } = this;
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<pk-menu> ${items.map(item => this.renderItem(item))} </pk-menu>
		`;
	}
}
//
window.customElements.define("pk-header-menu", PKHeaderMenu);
