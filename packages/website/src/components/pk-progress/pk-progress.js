import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-translate/pk-translate";
//
class PKProgress extends LitElement {
	static get properties() {
		return {
			label: { type: String },
			value: { type: Number }
		};
	}

	async updated(updatedProps) {
		await this.updateComplete;
		if (updatedProps.has("value")) {
			const valueElement = this.shadowRoot.querySelector("DIV > DIV");
			valueElement.style.width = `${this.value}%`;
		}
	}
	render() {
		const { label } = this;
		return html`
			${sharedStyle}
			<style>
				pk-translate {
					font-size: 14px;
					font-weight: 600;
					/* THEME LIGHT */
					color: #444;
				}
				:host > div {
					display: flex;
					height: 12px;
					overflow: hidden;
					font-size: 0.75rem;
					background-color: #e9ecef;

					/* THEME LIGHT */
					background-color: #f0f0f0;
				}
				:host > div > div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					color: #fff;
					text-align: center;
					white-space: nowrap;
					background-color: #007bff;
					transition: width 0.6s ease;

					background-color: #0078d4;
				}
			</style>
			<pk-translate key=${label}></pk-translate>
			<div><div></div></div>
		`;
	}
}
//
window.customElements.define("pk-progress", PKProgress);
