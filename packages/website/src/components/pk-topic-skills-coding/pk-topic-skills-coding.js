import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-progress/pk-progress";
//
class PKTopicSkillsCoding extends LitElement {
	static get properties() {
		return {};
	}
	render() {
		return html`
			${sharedStyle}
			<style>
				pk-progress {
					margin-top: 16px;
				}
			</style>
			<pk-progress label="JavaScript" value="90"></pk-progress>
			<pk-progress label="Java" value="10"></pk-progress>
			<pk-progress label="PHP" value="20"></pk-progress>
		`;
	}
}
//
window.customElements.define("pk-topic-skills-coding", PKTopicSkillsCoding);
