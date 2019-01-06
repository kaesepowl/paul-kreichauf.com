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
			<pk-progress label="topic_skills_infrastructure_hosted" value="70"></pk-progress>
			<pk-progress label="topic_skills_infrastructure_devops" value="65"></pk-progress>
			<pk-progress label="topic_skills_infrastructure_aws" value="60"></pk-progress>
			<pk-progress label="topic_skills_infrastructure_google" value="40"></pk-progress>
		`;
	}
}
//
window.customElements.define(
	"pk-topic-skills-infrastructure",
	PKTopicSkillsInfrastructure
);
