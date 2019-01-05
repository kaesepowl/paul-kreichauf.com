import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-icon/pk-icon";
//
class PKTopicContactInfo extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					font-size: 15px;
					color: #444;
					line-height: 36px;
				}
				div {
					margin-top: 10px;
				}
				div a {
					color: #444;
					text-decoration: none;
				}
				div a:hover {
					text-decoration: underline;
				}
				pk-icon {
					color: #0078d4;
					font-size: 28px;
					position: relative;
					top: 5px;
					margin-right: 6px;
				}
			</style>
			<div>
				<pk-icon type="map-marker"></pk-icon>
				<span>Munich, Germany</span>
			</div>
			<div>
				<pk-icon type="envelope"></pk-icon>
				<a href="mailto:info@paul-kreichauf.com">
					info@paul-kreichauf.com
				</a>
			</div>
			<div>
				<pk-icon type="phone"></pk-icon>
				<a href="tel:+491734302543"> +49 173 4302542 </a>
			</div>
			<div>
				<pk-icon type="fax"></pk-icon>
				<span>+49 32 221937798 </span>
			</div>
		`;
	}
}
//
window.customElements.define("pk-topic-contact-info", PKTopicContactInfo);
