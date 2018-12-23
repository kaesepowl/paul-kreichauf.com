import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-scroller/pk-scroller";
//
class PKContent extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
					width: 100%;
					height: 100%;
					background-color: #fff;
					box-shadow: 0 1px 36px rgba(0, 0, 0, 0.15);
				}
				pk-scroller {
					height: 100%;
					overflow:hidden;
				}
				@media (max-width: 1023px) {
				}
			</style>
			<pk-scroller><slot></slot></pk-scroller>
		`;
	}
}
//
window.customElements.define("pk-content", PKContent);
