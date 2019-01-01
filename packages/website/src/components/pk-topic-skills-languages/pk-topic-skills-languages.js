import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-progress/pk-progress";
//
class PKTopicSkillsLanguages extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<style>
				pk-progress {
					margin-top: 16px;
				}
			</style>
			<pk-progress
				label="topic_skills_languages_js"
				value="90"
			></pk-progress>
			<pk-progress
				label="topic_skills_languages_sql"
				value="60"
			></pk-progress>
			<pk-progress
				label="topic_skills_languages_php"
				value="20"
			></pk-progress>
			<pk-progress
				label="topic_skills_languages_java"
				value="10"
			></pk-progress>
		`;
	}
}
//
window.customElements.define(
	"pk-topic-skills-languages",
	PKTopicSkillsLanguages
);
