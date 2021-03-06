import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-image/pk-image";
//
class PKAvatar extends LitElement {
	static get properties() {
		return {
			name: { type: String },
			caption: { type: String }
		};
	}

	buildPathByName(name) {
		return `/src/assets/avatar/${name.toLowerCase()}`;
	}

	render() {
		const { name, caption } = this;
		return html`
			<style>
				:host {
					display: block;
				}
				span {
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
					-moz-transition: 0.5s;
					-o-transition: 0.5s;
					-webkit-transition: 0.5s;
					transition: 0.5s;
					-webkit-border-radius: 3px;
					-moz-border-radius: 3px;
					-ms-border-radius: 3px;
					border-radius: 3px;
					background-color: #222;
					color: #878d99;
				}
				:host(:hover) span {
					opacity: 1;
					visibility: visible;
				}
				@media (max-width: 1023px) {
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
				}
				pk-image {
					display: block;
					width: 36px;
					height: 36px;
					border-radius: 50%;
					overflow: hidden;
				}
			</style>
			<pk-image src=${this.buildPathByName(name)}></pk-image>
			<span>${caption}</span>
		`;
	}
}
//
window.customElements.define("pk-avatar", PKAvatar);
