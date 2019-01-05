import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content-title/pk-content-title";
import "../pk-google-maps/pk-google-maps";
import "../pk-content-group/pk-content-group";
import "../pk-topic-imprint/pk-topic-imprint";
import "../pk-topic-privacy/pk-topic-privacy";
import "../pk-topic-contact-info/pk-topic-contact-info";
import "../pk-topic-form-contact/pk-topic-form-contact";
import "../pk-translate/pk-translate";
//
class PKPageContact extends PKPage {
	render() {
		const content = html`
			<style>
				pk-content-container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-column-gap: 30px;
					grid-row-gap: 0px;
					grid-template-areas: "Title Title" "Contact Map" "Imprint Imprint" "Privacy Privacy";
				}
				pk-content-title {
					grid-area: Title;
				}
				#imprint {
					grid-area: Imprint;
				}
				#privacy {
					grid-area: Privacy;
				}
				#contact {
					grid-area: Contact;
				}
				pk-topic-imprint,
				pk-topic-privacy {
					margin: 15px;
				}
				pk-google-maps {
					grid-area: Map;
					margin-top: 50px;
					height: 580px;
				}
				@media (max-width: 1023px) {
					pk-google-maps {
						margin-top: 30px;
					}
				}
				@media (max-width: 575px) {
					pk-content-container {
						grid-template-columns: 1fr;
						grid-template-areas: "Title" "Contact" "Map" "Imprint" "Privacy";
					}
				}
			</style>
			<pk-content-title>
				<pk-translate key="page_contact_title"> </pk-translate>
			</pk-content-title>
			<div id="contact">
				<pk-content-group title="page_contact_info">
					<pk-topic-contact-info></pk-topic-contact-info>
				</pk-content-group>
				<pk-content-group title="page_contact_form">
					<pk-topic-form-contact></pk-topic-form-contact>
				</pk-content-group>
			</div>
			<pk-content-group id="imprint" title="Imprint">
				<pk-topic-imprint></pk-topic-imprint>
			</pk-content-group>
			<pk-content-group id="privacy" title="Privacy">
				<pk-topic-privacy></pk-topic-privacy>
			</pk-content-group>
			<pk-google-maps
				longitude="11.6006313"
				latitude="48.1452504"
				zoom="11"
			></pk-google-maps>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-contact", PKPageContact);
