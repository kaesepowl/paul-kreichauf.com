import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content/pk-content";
import "../pk-content-container/pk-content-container";
import "../pk-content-button/pk-content-button";
import "../pk-content-button-group/pk-content-button-group";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-title/pk-content-title";
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
					<pk-content-container>
						<pk-content-title>ABOUT ME</pk-content-title>
						<pk-content-desc
							><b>Hi, I'm John Sensitive</b>, invidunt sed labore
							eirmod ea et, dolor sit sea et est diam lorem sed.
							Est rebum lorem sed at consetetur et eirmod. I'm
							good at html, css, wordpress, .net core, jquery,
							bootstrap, angularjs.</pk-content-desc
						>
						<pk-content-button-group>
							<pk-content-button icon="download"
								>Download CV</pk-content-button
							>
							<pk-content-button
								icon="facebook"
								hideCaption
							></pk-content-button>
							<pk-content-button
								icon="youtube"
								hideCaption
							></pk-content-button>
							<pk-content-button
								icon="soundcloud"
								hideCaption
							></pk-content-button>
							<pk-content-button
								icon="github"
								hideCaption
							></pk-content-button>
						</pk-content-button-group>
						${
							new Array(1000).fill(0).map(
								(v, i) =>
									html`
										Zeile ${i + 1} <br />
									`
							)
						}
					</pk-content-container>
				</pk-content>
			</pk-animate>
		`;
	}
}
//
window.customElements.define("pk-page-about", PKPageAbout);
