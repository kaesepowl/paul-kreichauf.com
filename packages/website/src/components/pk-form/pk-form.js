import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKForm extends LitElement {
	firstUpdated() {
		this.getFormElement().addEventListener("submit", e => this.submit(e));
	}

	getFormElement() {
		return this.shadowRoot
			.getElementById("form")
			.assignedElements()
			.pop();
	}

	reset() {
		this.getFormElement().reset();
	}

	submit(e) {
		e.preventDefault();
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					margin-top: 20px;
				}
			</style>
			<slot id="form" name="form"></slot> <slot></slot>
		`;
	}
}
//
window.customElements.define("pk-form", PKForm);
