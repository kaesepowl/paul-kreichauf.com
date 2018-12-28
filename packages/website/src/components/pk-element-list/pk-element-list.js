import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKElementList extends LitElement {

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					margin-bottom:16px;
					padding-inline-start: 40px;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-element-list", PKElementList);
