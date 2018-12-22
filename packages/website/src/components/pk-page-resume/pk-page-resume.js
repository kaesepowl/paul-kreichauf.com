import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content/pk-content";
import "../pk-animate/pk-animate";
//
class PkPageResume extends PKPage {
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
			<pk-animate> <pk-content>PAGE-RESUME</pk-content> </pk-animate>
		`;
	}
}
//
window.customElements.define("pk-page-resume", PkPageResume);
