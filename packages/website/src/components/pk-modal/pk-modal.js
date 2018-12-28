import { html } from "@polymer/lit-element";
//
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
//
import sharedStyle from "../../styles/shared";
import { getModalOpen, getModalId } from "../../selectors/modal";
import { getAppSubPages, getAppPage } from "../../selectors/app";
import { navigate } from "../../actions/app";
//
class PKModal extends PKConnectedElement {
	static get properties() {
		return {
			hidden: { type: Boolean, reflect: true },
			id: { type: String }
		};
	}

	stateChanged(state) {
		this.hidden = getModalOpen(state) !== true;
		this.id = getModalId(state);
	}

	updated(changedProps) {
		if (changedProps.has("id") && this.id !== null) {
			const contentElement = document.createElement(
				`pk-modal-${this.id}`
			);
			const container = this.shadowRoot.getElementById("content");
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
			container.appendChild(contentElement);
		}
	}

	close() {
		const subPages = getAppSubPages(this.getState());
		const subPath = subPages
			.filter(subPage => subPage !== `modal-${this.id}`)
			.join("/");
		const page = getAppPage(this.getState());
		//
		window.history.pushState(
			{},
			"",
			`/${page}${subPath !== "" ? `/${subPath}` : ""}`
		);
		this.dispatchAction(
			navigate(decodeURIComponent(window.location.pathname))
		);
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1337;
					overflow: hidden auto;
					transition: 0.5s;
				}
				:host([hidden]) {
					display: none;
				}
				#blackLayer {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1338;
					opacity: 0.8;
					background-color: #000;
					cursor: zoom-out;
				}
				#content {
					max-width: 720px;
					width: 100%;
					position: absolute;
					top: 50px;
					bottom: 50px;
					left: 50%;
					transform: translateX(-50%);
					z-index: 1339;
				}
				#buttonContainer {
					max-width: 720px;
					width: 100%;
					position: absolute;
					top: 0px;
					height: 50px;
					left: 50%;
					transform: translateX(-50%);
					z-index: 1339;
				}
				button {
					width: 44px;
					height: 44px;
					line-height: 42px;
					position: absolute;
					z-index: 1340;
					right: 0;
					top: 0;
					text-decoration: none;
					text-align: center;
					opacity: 0.65;
					color: #fff;
					font-style: normal;
					font-size: 28px;
					font-family: Arial, Baskerville, monospace;
					overflow: visible;
					cursor: pointer;
					background: transparent;
					border: 0;
					display: block;
					outline: none;
					padding: 0;
					box-shadow: none;
					touch-action: manipulation;
				}
			</style>
			<div id="blackLayer" @click=${e => this.close()}></div>
			<div id="content"></div>
			<div id="buttonContainer">
				<button @click=${e => this.close()}>x</button>
			</div>
		`;
	}
}
//
window.customElements.define("pk-modal", PKModal);
