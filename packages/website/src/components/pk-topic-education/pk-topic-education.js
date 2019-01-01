import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-topic-experience-part/pk-topic-experience-part";
//
class PKTopicEducation extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-column-gap: 30px;
					grid-row-gap: 0px;
					justify-items: stretch;
					align-items: stretch;
				}
				@media (max-width: 768px) {
					:host {
						grid-template-columns: 1fr 1fr;
						grid-column-gap: 16px;
					}
				}
			</style>
			<pk-topic-experience-part
				img="/src/assets/images/resume/siemens"
				desc="topic_education_siemens_desc"
				title="topic_education_siemens_title"
				subtitle="topic_education_siemens_subtitle"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/professional-school"
				desc="topic_education_technical_high_school_desc"
				title="topic_education_technical_high_school_title"
				subtitle="topic_education_technical_high_school_subtitle"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/professional-school"
				desc="topic_education_professional_school_desc"
				title="topic_education_professional_school_title"
				subtitle="topic_education_professional_school_subtitle"
			></pk-topic-experience-part>
		`;
	}
}
//
window.customElements.define("pk-topic-education", PKTopicEducation);
