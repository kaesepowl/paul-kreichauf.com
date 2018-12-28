import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKContentFilterGroup extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					text-align: right;
					margin-top: 25px;
					margin-bottom: -25px;
				}
				::slotted(pk-link) {
					display: inline-block;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-filter-group", PKContentFilterGroup);
