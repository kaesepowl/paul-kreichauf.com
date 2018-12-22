import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-header-logo/pk-header-logo";
import "../pk-header-menu/pk-header-menu";
import "../pk-header-button/pk-header-button";
//
class PKHeader extends LitElement {
	static get properties() {
		return {
			open: { type: Boolean }
		};
	}

	constructor() {
		super();

		this.open = false;
	}

	render() {
		const { open } = this;
		return html`
			<style>
				:host {
					display: block;
					position: fixed;
					top: 0;
					left: 0;
					width: 50px;
					height: 100%;
					z-index: 2;
					transition: 0.5s;
					background-color: #eee;
				}
				@media (max-width: 1023px) {
					:host {
						top: 0;
						left: 0;
						height: 50px;
						width: 100%;
						border: none !important;
					}
				}
			</style>
			<pk-header-logo></pk-header-logo>
			<pk-header-menu></pk-header-menu>
			<pk-header-button></pk-header-button>
		`;
	}
}
//
window.customElements.define("pk-header", PKHeader);
