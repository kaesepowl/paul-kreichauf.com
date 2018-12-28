import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKYouTube extends LitElement {
	static get properties() {
		return {
			youtubeId: { type: String }
		};
	}

	render() {
		const { youtubeId } = this;
		return html`
			${sharedStyle}
			<style>
				:host {
					width: 100%;
					position: relative;
					padding-top: 56.25%;
				}
				iframe {
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
				}
			</style>
			<iframe
				width="100%"
				height="100%"
				src=${`https://www.youtube.com/embed/${youtubeId}`}
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		`;
	}
}
//
window.customElements.define("pk-youtube", PKYouTube);
