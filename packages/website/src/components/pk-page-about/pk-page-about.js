import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content/pk-content";
import "../pk-animate/pk-animate";
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
			<pk-animate>
				<pk-content>
					${
						new Array(1000).fill(0).map(
							(v, i) =>
								html`
									Zeile ${i + 1} <br />
								`
						)
					}
				</pk-content>
			</pk-animate>
		`;
	}
}
//
window.customElements.define("pk-page-about", PKPageAbout);
