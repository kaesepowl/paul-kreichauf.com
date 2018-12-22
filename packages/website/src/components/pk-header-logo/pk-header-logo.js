import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-link/pk-link";
import "../pk-avatar/pk-avatar";
//
class PKHeaderLogo extends LitElement {
	static get properties() {
		return {
			name: { type: String },
			avatar: { type: String }
		};
	}

	constructor() {
		super();
		//
		this.name = "Paul Kreichauf";
		this.avatar = "paul";
	}

	render() {
		const { name, avatar } = this;
		return html`
			<style>
				:host {
					display: block;
					cursor: pointer;
				}
			</style>
			<pk-link>
				<pk-avatar name=${avatar}></pk-avatar>
				<span>${name}</span>
			</pk-link>
		`;
	}
}
//
window.customElements.define("pk-header-logo", PKHeaderLogo);
