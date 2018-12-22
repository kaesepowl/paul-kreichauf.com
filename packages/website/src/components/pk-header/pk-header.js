import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-header-logo/pk-header-logo";
import "../pk-header-menu/pk-header-menu";
//
class PKHeader extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<div>
				<pk-header-logo></pk-header-logo>
				<pk-header-menu></pk-header-menu>
			</div>
		`;
	}
}
//
window.customElements.define("pk-header", PKHeader);
