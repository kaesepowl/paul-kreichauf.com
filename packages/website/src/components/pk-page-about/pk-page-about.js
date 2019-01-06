import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content/pk-content";
import "../pk-content-group/pk-content-group";
import "../pk-content-container/pk-content-container";
import "../pk-content-button/pk-content-button";
import "../pk-content-button-group/pk-content-button-group";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-title/pk-content-title";
import "../pk-animate/pk-animate";
import "../pk-topic-services/pk-topic-services";
import "../pk-translate/pk-translate";
//
class PKPageAbout extends PKPage {
	render() {
		const content = html`
			<pk-content-title>
				<pk-translate key="page_about_title"></pk-translate>
			</pk-content-title>
			<pk-content-desc>
				<pk-translate key="page_about_desc"></pk-translate>
			</pk-content-desc>
			<pk-content-button-group>
				<pk-content-button icon="download" style="display:none;">
					<pk-translate key="page_about_download_cv"></pk-translate>
				</pk-content-button>
				<pk-content-button
					link="https://facebook.com/kaesepowl"
					icon="facebook"
					hideCaption
				></pk-content-button>
				<pk-content-button
					link="https://youtube.com/kaesepowl"
					icon="youtube"
					hideCaption
				></pk-content-button>
				<pk-content-button
					link="https://soundcloud.com/kaesepowl"
					icon="soundcloud"
					hideCaption
				></pk-content-button>
				<pk-content-button
					link="https://github.com/kaesepowl"
					icon="github"
					hideCaption
				></pk-content-button>
			</pk-content-button-group>
			<pk-content-group title="page_about_services">
				<pk-topic-services></pk-topic-services>
			</pk-content-group>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-about", PKPageAbout);
