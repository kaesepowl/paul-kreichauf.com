import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-card/pk-card";
import "../pk-icon/pk-icon";
//
class PKTopicServices extends LitElement {
	render() {
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					box-sizing: border-box;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-column-gap: 30px;
					grid-row-gap: 0px;
					justify-items: stretch;
					align-items: stretch;
				}

				@media (max-width: 768px) {
					:host {
						grid-template-columns: 1fr 1fr;
					}
				}
			</style>
			<pk-card>
				<pk-icon type="code" slot="icons"></pk-icon>
				<span slot="name">Web Development</span>
				<span slot="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
			</pk-card>
			<pk-card>
				<pk-icon type="rotate-right" slot="icons"></pk-icon>
				<span slot="name">Agile Methods</span>
				<span slot="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
			</pk-card>
			<pk-card>
				<pk-icon type="cloud" slot="icons"></pk-icon>
				<span slot="name">Cloud Architecture</span>
				<span slot="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
			</pk-card>
			<pk-card>
				<pk-icon type="futbol-o" slot="icons"></pk-icon>
				<span slot="name">Foosball&reg; Training</span>
				<span slot="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
			</pk-card>
			<pk-card>
				<pk-icon type="music" slot="icons"></pk-icon>
				<span slot="name">Mxing Music</span>
				<span slot="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
			</pk-card>
		`;
	}
}
//
window.customElements.define("pk-topic-services", PKTopicServices);
