import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content-title/pk-content-title";
import "../pk-google-maps/pk-google-maps";
import "../pk-content-group/pk-content-group";
import "../pk-form/pk-form";
import "../pk-form-input-text/pk-form-input-text";
import "../pk-form-textarea/pk-form-textarea";
import "../pk-form-button/pk-form-button";
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
					grid-template-areas: "Title Title" "Contact Map";
				}
				pk-content-title {
					grid-area: Title;
				}
				#contact {
					grid-area: Contact;
					font-size: 15px;
					color: #444;
					line-height: 36px;
				}
				#contact div {
					margin-top: 10px;
				}
				#contact div a {
					color: #444;
					text-decoration: none;
				}
				#contact div a:hover {
					text-decoration: underline;
				}
				pk-google-maps {
					grid-area: Map;
					margin-top: 50px;
					height: 550px;
				}
				pk-icon {
					color: #0078d4;
					font-size: 28px;
					position: relative;
					top: 5px;
					margin-right: 6px;
				}
				.button-area {
					text-align: right;
				}
				@media (max-width: 1023px) {
					pk-google-maps {
						margin-top: 30px;
					}
				}
				@media (max-width: 575px) {
					pk-content-container {
						grid-template-columns: 1fr;
						grid-template-areas: "Title" "Contact" "Map";
					}
				}
			</style>
			<pk-content-title>CONTACT</pk-content-title>
			<div id="contact">
				<pk-content-group title="Get in Touch">
					<div>
						<pk-icon type="map-marker"></pk-icon>
						<span>Munich, Germany</span>
					</div>
					<div>
						<pk-icon type="envelope"></pk-icon>
						<a href="mailto:info@paul-kreichauf.com">
							info@paul-kreichauf.com
						</a>
					</div>
					<div>
						<pk-icon type="phone"></pk-icon>
						<a href="tel:+491734302543"> +49 173 430 25 43 </a>
					</div>
				</pk-content-group>
				<pk-content-group title="Contact Form">
					<pk-form>
						<pk-form-input-text
							icon="user"
							placeholder="Name Surname"
						></pk-form-input-text>
						<pk-form-input-text
							icon="envelope"
							placeholder="Email Address"
						></pk-form-input-text>
						<pk-form-textarea
							icon="comment"
							placeholder="Email Address"
						></pk-form-textarea>
						<div class="button-area">
							<pk-form-button
								caption="Send Message"
								icon="long-arrow-right"
							></pk-form-button>
						</div>
					</pk-form>
				</pk-content-group>
			</div>
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
