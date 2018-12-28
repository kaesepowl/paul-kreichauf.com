import { LitElement, html } from "@polymer/lit-element";
//
class PkContentButtonGroup extends LitElement {

	render() {
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;

					margin-top: 50px;
					text-align: center;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-button-group", PkContentButtonGroup);
