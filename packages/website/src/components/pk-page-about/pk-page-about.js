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
//
class PKPageAbout extends PKPage {

	render() {
		const content = html`
			<pk-content-title>ABOUT ME</pk-content-title>
			<pk-content-desc>
				<b>Hi, I'm Paul Kreichauf</b>, invidunt sed labore eirmod ea et,
				dolor sit sea et est diam lorem sed. Est rebum lorem sed at
				consetetur et eirmod. I'm good at html, css, wordpress, .net
				core, jquery, bootstrap, angularjs.
			</pk-content-desc>
			<pk-content-button-group>
				<pk-content-button icon="download">
					Download CV
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
			<pk-content-group title="Services">
				<pk-topic-services></pk-topic-services>
			</pk-content-group>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-about", PKPageAbout);
