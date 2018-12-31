import { html } from "@polymer/lit-element";
//
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
import { i18nGetTranslation } from "../../selectors/i18n";
//
class PKTranslate extends PKConnectedElement {
	static get properties() {
		return {
			key: { type: String }
		};
	}

	stateChanged(state) {
		const newTranslation = this.getTranslation(this.key);
		if (this.translation !== newTranslation) {
			this.translation = newTranslation;
			this.requestUpdate();
		}
	}

	getTranslation(key) {
		const translation = i18nGetTranslation(this.getState());
		return translation[key] || key;
	}

	/**
	 * this component does not need a shadow root
	 */
	createRenderRoot() {
		return this;
	}

	render() {
		const { translation } = this;
		return html`
			${translation}
		`;
	}
}
//
window.customElements.define("pk-translate", PKTranslate);
