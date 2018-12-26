import { LitElement, html } from "@polymer/lit-element";
//
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
//
import sharedStyle from "../../styles/shared";
import { getModalOpen, getModalId } from "../../selectors/modal";
import { getAppSubPages } from "../../selectors/app";
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

		console.log(this.hidden, this.id);
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
				}
				#content {
					position: fixed;
					top: 50px;
					left: 50px;
					width: 500px;
					height: 400px;
					z-index: 1339;
					background-color: #ff0080;
				}
			</style>
			<div id="blackLayer"></div>
			<div id="content"></div>
		`;
	}
}
//
window.customElements.define("pk-modal", PKModal);
