import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-link/pk-link";
//
class PKMenuItem extends LitElement {
	static get properties() {
		return {
			caption: { type: String },
			path: { type: String }
		};
	}

	render() {
		const { caption, path } = this;
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<pk-link path=${path}> <div>${caption}</div> </pk-link>
		`;
	}
}
//
window.customElements.define("pk-menu-item", PKMenuItem);
