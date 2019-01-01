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
				picture {
					display: block;
					max-width: 100%;
				}
				picture img {
					display: block;
					max-width: 100%;
				}
			</style>
			<picture>
				<source srcset=${`${src}.webp`} type="image/webp" />
				<source srcset=${`${src}.jpg`} type="image/jpeg" />
				<img src=${`${src}.jpg`}>
			</picture>
		`;
	}
}
//
window.customElements.define("pk-image", PKImage);
