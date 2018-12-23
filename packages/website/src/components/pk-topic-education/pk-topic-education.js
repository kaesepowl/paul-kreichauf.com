import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-card/pk-card";
//
class PKTopicEducation extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<pk-card>
				<span slot="name">Development</span>
				<span slot="sub">Development</span>
				<span slot="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
			</pk-card>
		`;
	}
}
//
window.customElements.define("pk-topic-education", PKTopicEducation);
