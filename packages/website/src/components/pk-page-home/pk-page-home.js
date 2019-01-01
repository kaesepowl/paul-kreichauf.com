import { html, LitElement } from "@polymer/lit-element";
//
import "../pk-translate/pk-translate";
//
class PKPageHome extends LitElement {
	static get properties() {
		return {
			empty: { type: Boolean, reflect: true }
		};
	}

	render() {
		return html`
			<style>
				:host {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-size: cover;
					background: url(/src/assets/images/background.${Modernizr.webp ? "webp" : "jpg"});
					background-repeat: no-repeat;
					-moz-transition: 0.5s;
					-o-transition: 0.5s;
					-webkit-transition: 0.5s;
					transition: 0.5s;
				}

				@media (max-width: 1600px) and (min-width: 1024px) {
					:host {
						background-position: 75% 10%;
					}
				}

				.bg {
					background: rgba(0, 0, 0, 0.6);
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
				.content {
					display: table;
					table-layout: fixed;
					height: 100%;
					width: 100%;
					padding-left: 12%;
					position: relative;
					z-index: 2;
					transition: 0.5s;
				}
				.content > div {
					display: table-cell;
					vertical-align: middle;
				}
				pk-translate {
					display: block;
				}
				pk-translate[key="home_title"] {
					line-height: 1.5em;
					font-size: 64px;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.85);
				}
				pk-translate[key="home_sub_title"] {
					font-size: 24px;
					color: rgba(255, 255, 255, 0.85);
				}

				:host([empty]) .content {
					opacity: 0;
				}
				@media (max-width: 1023px) {
					.content {
						text-align: center;
						padding: 0;
					}
					.content > div {
						vertical-align: bottom;
						padding-bottom: 20px;
					}
				}
			</style>

			<div class="content">
				<div>
					<pk-translate key="home_title"></pk-translate>
					<pk-translate key="home_sub_title"></pk-translate>
				</div>
			</div>
			<div class="bg"></div>
		`;
	}
}
//
window.customElements.define("pk-page-home", PKPageHome);
