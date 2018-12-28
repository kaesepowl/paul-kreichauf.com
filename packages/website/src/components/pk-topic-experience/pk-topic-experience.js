import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-card/pk-card";
//
class PKTopicExperience extends LitElement {
	render() {
		return html`
			${sharedStyle}
			<pk-card>
				<span slot="name">Programming Art University</span>
				<span slot="sub">2006 - 2010 | New York</span>
				<span slot="desc">
					Diam diam amet vero tempor at amet justo, sit ipsum sed
					consetetur et dolore dolore dolores diam nonumy. Et et erat
					no sea.
				</span>
			</pk-card>
			<pk-card>
				<span slot="name">Programming Art University</span>
				<span slot="sub">2006 - 2010 | New York</span>
				<span slot="desc">
					Diam diam amet vero tempor at amet justo, sit ipsum sed
					consetetur et dolore dolore dolores diam nonumy. Et et erat
					no sea.
				</span>
			</pk-card>
			<pk-card>
				<span slot="name">Programming Art University</span>
				<span slot="sub">2006 - 2010 | New York</span>
				<span slot="desc">
					Diam diam amet vero tempor at amet justo, sit ipsum sed
					consetetur et dolore dolore dolores diam nonumy. Et et erat
					no sea.
				</span>
			</pk-card>
		`;
	}
}
//
window.customElements.define("pk-topic-experience", PKTopicExperience);
