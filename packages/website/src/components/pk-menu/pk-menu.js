import { LitElement, html } from "@polymer/lit-element";
//
class PKMenu extends LitElement {

	render() {
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-menu", PKMenu);