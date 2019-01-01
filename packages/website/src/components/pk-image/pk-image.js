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

	renderPicture(src) {
		return html`
			<picture>
				<source srcset=${`${src}.webp`} type="image/webp" />
				<source srcset=${`${src}.jpg`} type="image/jpeg" />
				<img src=${`${src}.jpg`} />
			</picture>
		`;
	}

	renderImg(src) {
		return html`
			<img src=${src} />
		`;
	}

	hasFileExtension(src) {
		return /[.]{1}/.test(src);
	}

	render() {
		const { src } = this;
		const content = this.hasFileExtension(src)
			? this.renderImg(src)
			: this.renderPicture(src);
		return html`
			${sharedStyle}
			<style>
				picture {
					display: block;
					max-width: 100%;
				}
				img {
					display: block;
					max-width: 100%;
				}
			</style>
			${content}
		`;
	}
}
//
window.customElements.define("pk-image", PKImage);
