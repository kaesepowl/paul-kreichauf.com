import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
class PKPageAbout extends PKPage {
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
			<div>PAGE-ABOUT</div>
		`;
	}
}
//
window.customElements.define("pk-page-about", PKPageAbout);
