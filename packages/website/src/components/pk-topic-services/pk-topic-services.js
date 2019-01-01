import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-card/pk-card";
import "../pk-icon/pk-icon";
import "../pk-translate/pk-translate";
//
class PKTopicServices extends LitElement {
	render() {
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					box-sizing: border-box;
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
					}
				}
			</style>
			<pk-card>
				<pk-icon type="code" slot="icons"></pk-icon>
				<pk-translate
					slot="name"
					key="topic_services_web_development_title"
				></pk-translate>
				<pk-translate
					slot="desc"
					key="topic_services_web_development_desc"
				></pk-translate>
			</pk-card>
			<pk-card>
				<pk-icon type="rotate-right" slot="icons"></pk-icon>
				<pk-translate
					slot="name"
					key="topic_services_agile_methods_title"
				></pk-translate>
				<pk-translate
					slot="desc"
					key="topic_services_agile_methods_desc"
				></pk-translate>
			</pk-card>
			<pk-card>
				<pk-icon type="cloud" slot="icons"></pk-icon>
				<pk-translate
					slot="name"
					key="topic_services_cloud_architecture_title"
				></pk-translate>
				<pk-translate
					slot="desc"
					key="topic_services_cloud_architecture_desc"
				></pk-translate>
			</pk-card>
			<pk-card>
				<pk-icon type="futbol-o" slot="icons"></pk-icon>
				<pk-translate
					slot="name"
					key="topic_services_kicker_title"
				></pk-translate>
				<pk-translate
					slot="desc"
					key="topic_services_kicker_desc"
				></pk-translate>
			</pk-card>
			<pk-card>
				<pk-icon type="music" slot="icons"></pk-icon>
				<pk-translate
					slot="name"
					key="topic_services_dj_title"
				></pk-translate>
				<pk-translate
					slot="desc"
					key="topic_services_dj_desc"
				></pk-translate>
			</pk-card>
		`;
	}
}
//
window.customElements.define("pk-topic-services", PKTopicServices);
