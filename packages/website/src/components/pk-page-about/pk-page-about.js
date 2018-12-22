import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content/pk-content";
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
			<pk-content> <div>PAGE-ABOUT</div> </pk-content>
		`;
	}
}
//
window.customElements.define("pk-page-about", PKPageAbout);
