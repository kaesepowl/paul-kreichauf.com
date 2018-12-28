import { LitElement, html } from "@polymer/lit-element";
//
class PKContentContainer extends LitElement {

	render() {
		return html`
			<style>
				:host {
					display: block;
					box-sizing: border-box;
					padding: 50px;
				}
				@media (max-width: 1023px) {
					:host {
						padding: 10px 16px 16px 16px;
					}
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-content-container", PKContentContainer);
