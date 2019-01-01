import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-progress/pk-progress";
//
class PKTopicSkillsParadigm extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<style>
				pk-progress {
					margin-top: 16px;
				}
			</style>
			<pk-progress
				label="topic_skills_paradigm_oop"
				value="90"
			></pk-progress>
			<pk-progress
				label="topic_skills_paradigm_imperative"
				value="80"
			></pk-progress>
			<pk-progress
				label="topic_skills_paradigm_functional"
				value="60"
			></pk-progress>
			<pk-progress
				label="topic_skills_paradigm_declarative"
				value="40"
			></pk-progress>
		`;
	}
}
//
window.customElements.define("pk-topic-skills-paradigm", PKTopicSkillsParadigm);
