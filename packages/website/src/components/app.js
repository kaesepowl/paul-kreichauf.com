import { LitElement, html } from "@polymer/lit-element";
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
			<div>APP</div>
		`;
	}
}

window.customElements.define("pk-app", PKApp);
