import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";

export class PKPage extends PKConnectedElement {
	shouldUpdate() {
		return this.active;
	}

	static get properties() {
		return {
			active: { type: Boolean }
		};
	}
}
