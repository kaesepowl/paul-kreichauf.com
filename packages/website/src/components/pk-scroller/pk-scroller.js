import { LitElement, html } from "@polymer/lit-element";
//
let initCalled = false;
let simplebarLoadPromise;
const loadSimplebar = () => {
	if (initCalled === false) {
		simplebarLoadPromise = new Promise((resolve, reject) => {
			const script = document.createElement("script");
			script.src = "/node_modules/simplebar/dist/simplebar.min.js";
			document.head.appendChild(script);
			script.addEventListener("load", resolve);
			script.addEventListener("error", reject);
		});
		initCalled = true;
	}
	return simplebarLoadPromise;
};
//
class PKScroller extends LitElement {
	async firstUpdated() {
		try {
			await loadSimplebar();
			await this.updateComplete;
			new SimpleBar(this.shadowRoot.getElementById("legacyWrapper"));
		} catch (e) {
			throw new TypeError("Failied Load Simplebar Library.");
		}
	}

	render() {
		return html`
			<link
				rel="stylesheet"
				href="/node_modules/simplebar/dist/simplebar.min.css"
			/>
			<style>
				:host {
					display: block;
					box-sizing: border-box;
				}
				#legacyWrapper {
					display: block;
					box-sizing: border-box;
					height: 100%;
					width: 100%;
				}
			</style>
			<div id="legacyWrapper"><slot></slot></div>
		`;
	}
}
//
window.customElements.define("pk-scroller", PKScroller);
