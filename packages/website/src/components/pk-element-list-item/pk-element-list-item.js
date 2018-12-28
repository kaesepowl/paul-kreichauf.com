import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKElementListItem extends LitElement {

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					display: list-item;
					list-style-type: disc;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-element-list-item", PKElementListItem);
