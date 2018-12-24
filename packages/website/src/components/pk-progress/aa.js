
//
import sharedStyle from "../../styles/shared";
//
import "../pk-card/pk-card";
//
class PKTopicExperience extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${sharedStyle}
		`;
	}
}
//
window.customElements.define("pk-topic-experience", PKTopicExperience);
