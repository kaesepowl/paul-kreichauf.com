import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
class PKPageHome extends PKPage {
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
			<div>PAGE-HOME</div>
		`;
	}
}
//
window.customElements.define("pk-page-home", PKPageHome);
