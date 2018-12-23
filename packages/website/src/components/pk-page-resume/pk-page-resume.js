import { html } from "@polymer/lit-element";
import { PKPage } from "../pk-page/pk-page";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-content-title/pk-content-title";
import "../pk-content-desc/pk-content-desc";
import "../pk-content-group/pk-content-group";
import "../pk-topic-education/pk-topic-education";
//
class PkPageResume extends PKPage {
	static get properties() {
		return {};
	}

	render() {
		const content = html`
			${sharedStyle}
			<style>
				pk-content-container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-column-gap: 30px;
					grid-row-gap: 0px;
					justify-items: stretch;
					align-items: stretch;
					grid-template-areas: "Title Title" "Desc Desc";
				}
				pk-content-title {
					grid-area: Title;
				}
				pk-content-desc {
					grid-area: Desc;
				}
			</style>
			<pk-content-title>RESUME</pk-content-title>
			<pk-content-desc>Over <b>10 Years</b> of Experience</pk-content-desc>
			<pk-content-group title="Education">
				<pk-topic-education></pk-topic-education>
			</pk-content-group>
			<pk-content-group title="Experience"> 2 </pk-content-group>
			<pk-content-group title="Coding Skills"> 1 </pk-content-group>
			<pk-content-group title="Infrastructur Skills">
				1
			</pk-content-group>
		`;
		return this.wrapContent(content);
	}
}
//
window.customElements.define("pk-page-resume", PkPageResume);
