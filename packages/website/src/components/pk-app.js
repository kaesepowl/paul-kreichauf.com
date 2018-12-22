import { LitElement, html } from "@polymer/lit-element";
//
import { store } from "../store";
//
import "./pk-header/pk-header";
import "./pk-icon/pk-icon";
//
class PKApp extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<div>
				<pk-header></pk-header>
				<pk-icon></pk-icon>
			</div>
		`;
	}
}

window.customElements.define("pk-app", PKApp);
