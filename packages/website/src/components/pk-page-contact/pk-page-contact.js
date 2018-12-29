import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import "../pk-content-title/pk-content-title";
import "../pk-google-maps/pk-google-maps";
import "../pk-content-group/pk-content-group";
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
					justify-items: stretch;
					align-items: stretch;
					grid-template-areas: "Title Title" "Touch Map" "Form Map";
				}
				pk-content-title {
					grid-area: Title;
				}
				#touch {
					grid-area: Touch;
				}
				#form {
					grid-area: Form;
				}
				pk-google-maps {
					grid-area: Map;
					margin-top: 50px;
					height: 500px;
				}
				pk-icon {
					color: #0078d4;
					font-size: 28px;
					position: relative;
					top: 5px;
					margin-right: 6px;
				}
				@media (max-width: 1023px) {
					pk-google-maps {
						margin-top: 30px;
					}
				}
				@media (max-width: 575px) {
					pk-content-container {
						grid-template-columns: 1fr;
						grid-template-areas: "Title";
					}
				}
			</style>
			<pk-content-title>CONTACT</pk-content-title>
			<pk-content-group id="touch" title="Get in Touch">
				<pk-icon type="map-marker"></pk-icon>
			</pk-content-group>
			<pk-content-group id="form" title="Contact Form">
				asdf
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
