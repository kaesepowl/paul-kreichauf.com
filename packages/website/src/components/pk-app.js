import { LitElement, html } from "@polymer/lit-element";
//
import "./pk-header/pk-header";
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
			<div><pk-header /></div>
		`;
	}
}

window.customElements.define("pk-app", PKApp);
