import { LitElement, html } from "@polymer/lit-element";
//
class PKAvatar extends LitElement {
	static get properties() {
		return {
			name: { type: String },
			caption: { type: String }
		};
	}

	buildPathByName(name) {
		return `/src/assets/avatar/${name.toLowerCase()}.jpg`;
	}

	render() {
		const { name, caption } = this;
		return html`
			<style>
				:host {
					display: block;
				}
				span {
					box-sizing: border-box;
					min-width: 75px;
					position: absolute;
					z-index: 9;
					left: 120%;
					top: 8px;
					font-size: 12px;
					padding: 5px 9px;
					pointer-events: none;
					opacity: 0;
					visibility: hidden;
					text-align: center;
					transition: 0.5s;
					border-radius: 3px;
					/* maximize */
					font-weight: 600;
					opacity: 1;
					visibility: visible;
					position: absolute;
					left: 45px;
					top: 8px;
					font-size: 15px;
					line-height: 1.5em;
					/* theme light */
					background-color: transparent !important;
					color: #666 !important;
				}
				img {
					display: block;
					width: 36px;
					height: 36px;
					border-radius: 50%;
				}
			</style>
			<img src=${this.buildPathByName(name)} /> <span>${caption}</span>
		`;
	}
}
//
window.customElements.define("pk-avatar", PKAvatar);
