import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-card/pk-card-new";
import "../pk-image/pk-image";
import "../pk-card-image/pk-card-image";
import "../pk-card-body/pk-card-body";
import "../pk-card-footer/pk-card-footer";
import "../pk-translate/pk-translate";
//
class PKTopicExperiencePart extends LitElement {
	static get properties() {
		return {
			img: { type: String },
			title: { type: String },
			subtitle: { type: String },
			link: { type: String }
		};
	}

	render() {
		const { img, link, title, subtitle } = this;
		return html`
			${sharedStyle}
			<pk-card-new>
				<pk-card-image>
					<a href=${link} target="_blank">
						<pk-image src=${img}></pk-image>
					</a>
				</pk-card-image>
				<pk-card-footer>
					<pk-translate slot="title" key=${title}></pk-translate>
					<pk-translate
						slot="subTitle"
						key=${subtitle}
					></pk-translate>
				</pk-card-footer>
			</pk-card-new>
		`;
	}
}
//
window.customElements.define("pk-topic-experience-part", PKTopicExperiencePart);
