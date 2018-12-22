import { LitElement } from "@polymer/lit-element";
//
import { connect } from "pwa-helpers/connect-mixin";
//
import { store } from "../../store";
//
export class PKConnectedElement extends connect(store)(LitElement) {
	getState() {
		return store.getState();
	}

	dispatchAction(action) {
		store.dispatch(action);
	}
}
