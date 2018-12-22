import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";

export class PKPage extends PKConnectedElement {
	static get properties() {
		return {
			active: { type: Boolean, reflect: true },
			visible: { type: Boolean, reflect: true }
		};
	}

	firstUpdated() {
		const animateElement = this.shadowRoot.querySelector("pk-animate");
		//
		if (animateElement) {
			animateElement.addEventListener("animationFinish", e => {
				this.visible = this.active;
			});
		}
	}

	updated(props) {
		if (props.has("active")) {
			const animateElement = this.shadowRoot.querySelector("pk-animate");
			if (animateElement && animateElement.type === null) {
				if (this.active === true) {
					animateElement.startAnimation("fadeInDown");
					this.visible = true;
				} else {
					animateElement.startAnimation("fadeOutDown");
				}
			}
		}
	}
}
