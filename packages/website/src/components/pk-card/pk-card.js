import { LitElement, html } from "@polymer/lit-element";
//
class PKCard extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					display: block;
					box-sizing: border-box;

					position: relative;
					display: flex;
					flex-direction: column;
					min-width: 0;
					word-wrap: break-word;
					background-color: #fff;
					background-clip: border-box;
					border: 1px solid rgba(0, 0, 0, 0.125);
					border-radius: 0.25rem;
					line-height: 1.5em;
					/* THEME LIGHT */
					background-color: transparent;

					/* DEV */
					border: none;
					margin-top: 25px;
				}
				.body {
					flex: 1 1 auto;
					padding: 1.25rem;

					/* DEV */
					padding: 0;
				}
				.icons {
					margin-bottom: 10px;
				}
				.icons ::slotted(pk-icon) {
					font-size: 40px;
					color: #0078d4;
				}
				.name {
					font-weight: 600;
				}
				.desc {
					text-align: justify;
					font-size: 15px;

					/* DEV */
					color: #666;
				}
			</style>
			<div class="body">
				<div class="icons"><slot name="icons"></slot></div>
				<div class="name"><slot name="name"></slot></div>
				<div class="desc"><slot name="desc"></slot></div>
			</div>
		`;
	}
}
//
window.customElements.define("pk-card", PKCard);
