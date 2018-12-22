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

	toggleMenu(e) {
		this.open = !this.open;
	}

	render() {
		const { open } = this;
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<div>
				<pk-header-logo></pk-header-logo>
				<pk-header-menu ?open=${open}></pk-header-menu>
				<pk-header-button
					@click=${this.toggleMenu}
					?open=${open}
				></pk-header-button>
			</div>
		`;
	}
}
//
window.customElements.define("pk-header", PKHeader);
