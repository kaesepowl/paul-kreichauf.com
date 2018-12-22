import { html } from "@polymer/lit-element";
//
import { installRouter } from "pwa-helpers/router";
//
import "./pk-header/pk-header";
import "./pk-icon/pk-icon";
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
					display: none;
					position: fixed;
					left: 50px;
					width: calc(100% - 50px);
					height: 100%;
					transition: 0.5s;
				}
				.page[active] {
					display: block;
				}

				@media (max-width: 1023px) {
					.page {
						left: 0;
						width: 100%;
					}
				}
			</style>
			<pk-header></pk-header>
			<pk-page-home
				class="page"
				?active="${page === "home"}"
			></pk-page-home>
			<pk-page-about
				class="page"
				?active="${page === "about"}"
			></pk-page-about>
		`;
	}
}

window.customElements.define("pk-app", PKApp);
