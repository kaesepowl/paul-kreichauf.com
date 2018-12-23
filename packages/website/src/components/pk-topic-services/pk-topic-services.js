import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-card/pk-card";
import "../pk-icon/pk-icon";
//
class PKTopicServices extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					display: block;
					box-sizing: border-box;
				}
			</style>
			<pk-card>
				<pk-icon type="windows" slot="icons"></pk-icon>
				<span slot="name">Web Development</span>
				<span slot="desc"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.</span
				>
			</pk-card>
		`;
	}
}
//
window.customElements.define("pk-topic-services", PKTopicServices);
