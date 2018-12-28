import { LitElement, html } from "@polymer/lit-element";
//
class PKScroller extends LitElement {
	async firstUpdated() {
		await this.updateComplete;
		new SimpleBar(this.shadowRoot.getElementById("legacyWrapper"));
	}

	render() {
		return html`
			<link
				rel="stylesheet"
				href="/node_modules/simplebar/dist/simplebar.css"
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
