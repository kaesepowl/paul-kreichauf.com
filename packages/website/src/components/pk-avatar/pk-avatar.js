import { LitElement, html } from "@polymer/lit-element";
//
class PKAvatar extends LitElement {
	static get properties() {
		return {
			name: { type: String }
		};
	}

	buildPathByName(name) {
		return `/src/assets/avatar/${name.toLowerCase()}.jpg`;
	}

	render() {
		const { name } = this;
		return html`
			<style>
				:host {
					display: block;
				}
				IMG {
					display: block;
					width: 36px;
					height: 36px;
					border-radius: 50%;
				}
			</style>
			<div><img src=${this.buildPathByName(name)} /></div>
		`;
	}
}
//
window.customElements.define("pk-avatar", PKAvatar);
