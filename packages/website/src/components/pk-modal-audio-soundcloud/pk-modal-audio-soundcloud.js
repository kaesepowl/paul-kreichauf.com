import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-soundcloud/pk-soundcloud";
import { getModalItemById } from "../../data/modal-items";
//
class PKModalAudioSoundCloud extends LitElement {
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
		const { soundcloudId } = this.data;
		return html`
			${sharedStyle}
			<pk-soundcloud soundcloudid=${soundcloudId}></pk-soundcloud>
		`;
	}
}
//
window.customElements.define(
	"pk-modal-audio-soundcloud",
	PKModalAudioSoundCloud
);
