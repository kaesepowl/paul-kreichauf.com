import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-header-logo/pk-header-logo";
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
				<p>HEADER</p>
			</div>
		`;
	}
}
//
window.customElements.define("pk-header", PKHeader);
