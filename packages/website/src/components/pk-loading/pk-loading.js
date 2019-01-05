import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKLoading extends LitElement {
	static get properties() {
		return {
			loading: { type: Boolean }
		};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					position: relative;
				}
				:host([loading]) .loading-container {
					display: block;
				}
				@keyframes bounce {
					0%,
					100% {
						transform: scale(0);
					}
					50% {
						transform: scale(1);
					}
				}
				.loading-container {
					display: none;
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					z-index: 99999 !important;

					/* THEME LIGHT */
					background-color: #fff;
					opacity: 0.8;
				}
				.bounce-container {
					position: relative;
					width: 40px;
					height: 40px;
					top: calc(50% - 20px);
					left: calc(50% - 20px);
				}
				.bounce1,
				.bounce2 {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					opacity: 0.6;
					position: absolute;
					top: 0;
					left: 0;
					animation: bounce 2s infinite ease-in-out;

					/* THEME LIGHT */
					background-color: #777;
				}
				.bounce2 {
					animation-delay: -1s;
				}
			</style>
			<div class="loading-container">
				<div class="bounce-container">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
				</div>
			</div>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-loading", PKLoading);
