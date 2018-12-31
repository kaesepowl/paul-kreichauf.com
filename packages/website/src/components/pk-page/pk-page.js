import { html } from "@polymer/lit-element";
//
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
//
import "../pk-animate/pk-animate";
import "../pk-content/pk-content";
import "../pk-content-container/pk-content-container";
import { getAppLoadedPages } from "../../selectors/app";
export class PKPage extends PKConnectedElement {
	static get properties() {
		return {
			active: { type: Boolean, reflect: true },
			visible: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.active = false;
		this.visible = false;
		this.loaded = false;
	}

	stateChanged(state) {
		const loadedPages = getAppLoadedPages(state);
		const page = this.tagName.toLowerCase().replace("pk-page-", "");
		this.loaded = loadedPages.includes(page);
	}

	firstUpdated() {
		this.animation = this.shadowRoot.querySelector("pk-animate");
		//
		this.animation.addEventListener("animationFinish", e => {
			this.visible = this.active;
		});
	}

	triggerAnimation() {
		// do not trigger if not complete loaded
		if (this.loaded === false) {
			return;
		}
		if (this.active === true) {
			this.animation.startAnimation("fadeInDown");
			this.visible = true;
		} else {
			this.animation.startAnimation("fadeOutDown");
		}
	}

	updated(props) {
		if (props.has("active")) {
			this.triggerAnimation();
		}
	}

	wrapContent(content) {
		return html`
			<style>
				:host {
					display: none !important;
					opacity: 0;
				}

				:host([visible]) {
					display: block !important;
					opacity: 1;
				}
			</style>
			<pk-animate>
				<pk-content>
					<pk-content-container>${content}</pk-content-container>
				</pk-content>
			</pk-animate>
		`;
	}
}
