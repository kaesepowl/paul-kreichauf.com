import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-content-title/pk-content-title";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-group/pk-content-group";
import "../pk-topic-education/pk-topic-education";
import "../pk-topic-experience/pk-topic-experience";
import "../pk-topic-skills-languages/pk-topic-skills-languages";
import "../pk-topic-skills-paradigm/pk-topic-skills-paradigm";
import "../pk-topic-skills-infrastructure/pk-topic-skills-infrastructure";
//
class PKPageResume extends PKPage {
	render() {
		const content = html`
			${sharedStyle}
			<style>
				pk-content-container {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-column-gap: 10px;
					grid-row-gap: 0px;
					justify-items: stretch;
					align-items: stretch;
					grid-template-areas:
						"Title Title Title"
						"Desc Desc Desc"
						"Experience Experience Experience"
						"Education Education Education"
						"Languages Paradigm Infrastructure";
				}
				pk-content-title {
					grid-area: Title;
				}
				pk-content-desc {
					grid-area: Desc;
				}
				#experience {
					grid-area: Experience;
				}
				#education {
					grid-area: Education;
				}
				#languages {
					grid-area: Languages;
				}
				#infrastructure {
					grid-area: Infrastructure;
				}
				#paradigm {
					grid-area: Paradigm;
				}
				@media (max-width: 768px) {
					pk-content-container {
						grid-template-columns: 1fr 1fr;
						grid-template-areas:
							"Title Title"
							"Desc Desc"
							"Experience Experience"
							"Education Education"
							"Languages Paradigm"
							"Infrastructure Infrastructure";
					}
				}
			</style>
			<pk-content-title>
				<pk-translate key="page_resume_title"></pk-translate>
			</pk-content-title>
			<pk-content-desc>
				<pk-translate key="page_resume_desc"></pk-translate>
			</pk-content-desc>
			<pk-content-group id="experience" title="page_resume_experience">
				<pk-topic-experience></pk-topic-experience>
			</pk-content-group>
			<pk-content-group id="education" title="page_resume_education">
				<pk-topic-education></pk-topic-education>
			</pk-content-group>
			<pk-content-group id="languages" title="page_resume_languages">
				<pk-topic-skills-languages></pk-topic-skills-languages>
			</pk-content-group>
			<pk-content-group
				id="infrastructure"
				title="page_resume_infrastructure"
			>
				<pk-topic-skills-infrastructure></pk-topic-skills-infrastructure>
			</pk-content-group>
			<pk-content-group id="paradigm" title="page_resume_paradigm">
				<pk-topic-skills-paradigm></pk-topic-skills-paradigm>
			</pk-content-group>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-resume", PKPageResume);
