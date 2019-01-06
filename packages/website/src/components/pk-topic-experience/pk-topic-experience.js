import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-topic-experience-part/pk-topic-experience-part";
//
class PKTopicExperience extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<style>
				:host {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-column-gap: 10px;
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
				img="/src/assets/images/resume/interhyp"
				desc="topic_experience_interhyp_desc"
				title="topic_experience_interhyp_title"
				subtitle="topic_experience_interhyp_subtitle"
				link="https://www.interhyp.de"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/team-internet"
				desc="topic_experience_team_internet_desc"
				title="topic_experience_team_internet_title"
				subtitle="topic_experience_team_internet_subtitle"
				link="https://www.teaminternet.com/"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/financial-com"
				desc="topic_experience_financial_com_desc"
				title="topic_experience_financial_com_title"
				subtitle="topic_experience_financial_com_subtitle"
				link="https://www.financial.com/"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/wailua"
				desc="topic_experience_wailua_desc"
				title="topic_experience_wailua_title"
				subtitle="topic_experience_wailua_subtitle"
				link="http://www.wailua.de/"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/travian-games"
				desc="topic_experience_travian_games_desc"
				title="topic_experience_travian_games_title"
				subtitle="topic_experience_travian_games_subtitle"
				link="https://www.traviangames.de/"
			></pk-topic-experience-part>
			<pk-topic-experience-part
				img="/src/assets/images/resume/efficient-it"
				desc="topic_experience_efficient_it_desc"
				title="topic_experience_efficient_it_title"
				subtitle="topic_experience_efficient_it_subtitle"
				link="http://www.efficient.it/"
			></pk-topic-experience-part>
		`;
	}
}
//
window.customElements.define("pk-topic-experience", PKTopicExperience);
