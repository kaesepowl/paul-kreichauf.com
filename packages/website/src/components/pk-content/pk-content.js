import { LitElement, html } from "@polymer/lit-element";
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
					position: absolute;
					margin: 30px auto;
					left: 0;
					right: 0;
					width: calc(100% - 60px);
					height: calc(100% - 60px);
					max-width: 1240px;
					background-color: deeppink;
				}

				@media (max-width: 1023px) {
					:host {
						margin: 50px 0 0 0;
						height: calc(100% - 50px);
						width: 100%;
					}
				}
			</style>
			<div><slot></slot></div>
		`;
	}
}
//
window.customElements.define("pk-content", PKContent);
