import { html } from "@polymer/lit-element";
//
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
import { i18nGetTranslation } from "../../selectors/i18n";

import template from "backtick-template";
//
class PKTranslate extends PKConnectedElement {
	static get properties() {
		return {
			key: { type: String },
			failed: { type: Boolean, reflect: true }
		};
	}

	stateChanged(state) {
		const newTranslation = this.getTranslation(this.key);
		if (this.translation !== newTranslation) {
			this.translation = newTranslation;
			this.failed = this.translation === null;
			//
			this.requestUpdate();
		}
	}

	getTranslation(key) {
		const translation = i18nGetTranslation(this.getState());
		return translation[key] || null;
	}

	/**
	 * this component does not need a shadow root
	 */
	createRenderRoot() {
		return this;
	}

	render() {
		const { translation, key } = this;
		return html`
			<style>
				pk-translate[failed] {
					word-break: break-all;
				}
				b {
					color: #0078d4;
					font-weight: 700;
				}
			</style>
			${template(html, translation || key)}
		`;
	}
}
//
window.customElements.define("pk-translate", PKTranslate);
