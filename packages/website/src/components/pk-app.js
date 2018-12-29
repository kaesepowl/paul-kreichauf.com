import { html } from "@polymer/lit-element";
//
import { installRouter } from "pwa-helpers/router";
//
import "./pk-modal/pk-modal";
import "./pk-header/pk-header";
import "./pk-icon/pk-icon";
import "./pk-page-home/pk-page-home";
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
					opacity: 0;
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 9;
				}

				.page[active] {
					z-index: 10;
				}
				.page[visible] {
					opacity: 1;
				}

				.pages {
					position: fixed;
					left: 50px;
					width: calc(100% - 50px);
					height: 100%;
					-moz-transition: 0.5s;
					-o-transition: 0.5s;
					-webkit-transition: 0.5s;
					transition: 0.5s;
				}

				.subpages {
					position: absolute;
					margin: 30px auto;
					left: 0;
					right: 0;
					width: calc(100% - 60px);
					height: calc(100% - 60px);
					max-width: 1240px;
				}

				@media (max-width: 1023px) {
					.page {
						height: 100%;
						width: 100%;
					}
					.pages {
						left: 0;
						width: 100%;
					}
					.subpages {
						margin: 50px 0 0 0;
						height: calc(100% - 50px);
						width: 100%;
					}
				}
			</style>
			<pk-modal></pk-modal>
			<pk-header></pk-header>
			<div class="pages">
				<pk-page-home
					active
					visible
					?empty=${page !== "home"}
				></pk-page-home>
				<div class="subpages">
					<pk-page-about
						class="page"
						?active="${page === "about"}"
					></pk-page-about>
					<pk-page-resume
						class="page"
						?active="${page === "resume"}"
					></pk-page-resume>
					<pk-page-portfolio
						class="page"
						?active="${page === "portfolio"}"
					></pk-page-portfolio>
					<pk-page-blog
						class="page"
						?active="${page === "blog"}"
					></pk-page-blog>
				</div>
			</div>
		`;
	}
}

window.customElements.define("pk-app", PKApp);
