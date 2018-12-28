import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKSoundCloud extends LitElement {
	static get properties() {
		return {
			soundcloudId: { type: String }
		};
	}

	render() {
		const { soundcloudId } = this;
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
				height="300"
				scrolling="no"
				frameborder="no"
				allow="autoplay"
				src=${
					`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`
				}
			></iframe>
		`;
	}
}
//
window.customElements.define("pk-soundcloud", PKSoundCloud);
