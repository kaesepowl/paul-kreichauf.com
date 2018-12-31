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
					padding: 10px 0 10px 8px;
					position: relative;
					margin-bottom: 1px;
				}

				:host:after {
					content: " ";
					position: absolute;
					left: 10px;
					bottom: 0;
					width: calc(100% - 20px);
					height: 1px;

					/* THEME LIGHT */
					background-color: #ccc;
				}
				@media (max-width: 1023px) {
					:host {
						padding: 7px 0 7px 8px;
					}
					:host:after {
						display: none;
					}
				}
			</style>
			<pk-link>
				<pk-avatar name=${avatar} caption=${name}></pk-avatar>
			</pk-link>
		`;
	}
}
//
window.customElements.define("pk-header-logo", PKHeaderLogo);
