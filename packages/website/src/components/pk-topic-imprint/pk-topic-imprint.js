import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PKTopicImprint extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
			<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
			<p>
				Paul Kreichauf<br />
				P&auml;hlstra&szlig;e 12<br />
				81377 M&uuml;nchen
			</p>

			<h2>Kontakt</h2>
			<p>
				Telefon: +49 173 4302542<br />
				Telefax: +49 32 221937798<br />
				E-Mail: info@paul-kreichauf.com
			</p>

			<p>
				Quelle:
				<a href="https://www.e-recht24.de/impressum-generator.html"
					>https://www.e-recht24.de/impressum-generator.html</a
				>
			</p>
		`;
	}
}
//
window.customElements.define("pk-topic-imprint", PKTopicImprint);
