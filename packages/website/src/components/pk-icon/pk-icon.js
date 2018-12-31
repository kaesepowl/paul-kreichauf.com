import { LitElement, html } from "@polymer/lit-element";
//
class PKIcon extends LitElement {
	static get properties() {
		return {
			type: { type: String }
		};
	}

	render() {
		const { type } = this;
		return html`
			<link
				rel="stylesheet"
				href="/src/assets/line-awesome/css/line-awesome.min.css"
			/>
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					line-height: 1;
					display: inline-block;
					color: #444;
					box-sizing: border-box;
				}
			</style>
			<i class="la la-${type}"></i>
		`;
	}
}
//
window.customElements.define("pk-icon", PKIcon);
