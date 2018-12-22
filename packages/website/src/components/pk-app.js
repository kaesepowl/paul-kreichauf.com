import { html } from "@polymer/lit-element";
//
import { installRouter } from "pwa-helpers/router";
//
import "./pk-header/pk-header";
import "./pk-icon/pk-icon";
import "./pk-page-home/pk-page-home";
import "./pk-page-resume/pk-page-resume";
import { PKConnectedElement } from "./pk-connected-element/pk-connected-element";
import { navigate } from "../actions/app";
import { getAppPage } from "../selectors/app";
//
class PKApp extends PKConnectedElement {
	static get properties() {
		return {
			page: { type: String }
		};
	}

	firstUpdated() {
		installRouter(location =>
			this.dispatchAction(navigate(decodeURIComponent(location.pathname)))
		);
	}

	stateChanged(state) {
		this.page = getAppPage(state);
	}

	render() {
		const { page } = this;
		return html`
			<style>
				:host {
					display: block;
				}
				.page {
					position: absolute;
					left: 0;
					width: calc(100% - 50px);
					height: 100%;
					z-index: 9;
					opacity: 0;
				}

				.page[active] {
					z-index: 10;
				}

				pk-page-home.page,
				pk-page-home.page[active] {
					z-index: initial;
				}
				.page[visible] {
					opacity: 1;
				}

				div {
					position: fixed;
					left: 50px;
					width: calc(100% - 50px);
					height: 100%;
					-moz-transition: 0.5s;
					-o-transition: 0.5s;
					-webkit-transition: 0.5s;
					transition: 0.5s;
				}

				@media (max-width: 1023px) {
					.page {
						left: 0;
						width: 100%;
					}
					div {
						left: 0;
						width: 100%;
					}
				}
			</style>
			<pk-header></pk-header>
			<div>
				<pk-page-home
					class="page"
					active
					visible
					?empty=${page !== "home"}
				></pk-page-home>
				<pk-page-about
					class="page"
					?active="${page === "about"}"
				></pk-page-about>
				<pk-page-resume
					class="page"
					?active="${page === "resume"}"
				></pk-page-resume>
			</div>
		`;
	}
}

window.customElements.define("pk-app", PKApp);
