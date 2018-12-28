import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-progress/pk-progress";
//
class PKTopicSkillsInfrastructure extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<style>
				pk-progress {
					margin-top: 16px;
				}
			</style>
			<pk-progress label="Hosted" value="70"></pk-progress>
			<pk-progress label="AWS" value="25"></pk-progress>
			<pk-progress label="Azure" value="0"></pk-progress>
		`;
	}
}
//
window.customElements.define(
	"pk-topic-skills-infrastructure",
	PKTopicSkillsInfrastructure
);
