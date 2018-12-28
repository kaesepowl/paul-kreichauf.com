import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-youtube/pk-youtube";
import { getModalItemById } from "../../data/modal-items";
//
class PKModalVideoYouTube extends LitElement {
	static get properties() {
		return {
			modalId: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.data = null;
	}

	shouldUpdate() {
		this.data = getModalItemById(this.modalId);
		return this.data !== null;
	}

	render() {
		const { youtubeId } = this.data;
		return html`
			${sharedStyle}
			<pk-youtube id=${youtubeId}></pk-youtube>
		`;
	}
}
//
window.customElements.define("pk-modal-video-youtube", PKModalVideoYouTube);
