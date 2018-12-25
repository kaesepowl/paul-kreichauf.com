import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKCard extends LitElement {
	static get properties() {
		return {};
	}

	firstUpdated(props) {
		// const slotElement = this.shadowRoot.querySelector("slot");
		// const assignedElements = slotElement.assignedElements();
		// //check for image element
		// const [imageElement] = assignedElements.filter(
		// 	el => el.tagName.toLowerCase() === "pk-image"
		// );
		// if (imageElement) {
		// }
	}

	render() {
		return html`
			<style>
				${sharedStyle} 
				:host {
					color: #444;
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

				.icons ::slotted(pk-icon) {
					font-size: 40px;
					color: #0078d4;
				}
				.body .name ::slotted(*) {
					font-weight: 600;
				}
				.sub {
					font-size: 12px;
					padding: 0 0 8px 0;
					/* THEME LIGHT */
					color: #777;
				}
				.desc {
					text-align: justify;
					font-size: 15px;

					/* DEV */
					color: #666;
				}
			</style>
			<slot></slot>
		`;
	}
}
//
window.customElements.define("pk-card-new", PKCard);
