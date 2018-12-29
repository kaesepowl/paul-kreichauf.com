import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKImage extends LitElement {
	static get properties() {
		return {
			src: { type: String }
		};
	}
	render() {
		const { src } = this;
		return html`
			${sharedStyle}
			<style>
				img {
					display: block;
					max-width: 100%;
				}
			</style>
			<img src=${src} />
		`;
	}
}
//
window.customElements.define("pk-image", PKImage);
