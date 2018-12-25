import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-link/pk-link";
//
class PKLinkIcon extends LitElement {
	static get properties() {
		return {
			path: { type: String },
			active: { type: Boolean, reflect: true },
			type: { type: String }
		};
	}
	render() {
		const { path, active, type } = this;
		return html`
			${sharedStyle}
			<style>
				:host {
					position: relative;
				}
				pk-link {
					position: relative;
					z-index: 1;
				}
				div {
					position: absolute;
					z-index: 2;
					width: 100%;
					height: 100%;
					left: 0;
					top: 0;
					background-color: #0078d4;
					opacity: 0;
					transition: 0.5s;
				}
				pk-icon {
					position: absolute;
					z-index: 3;
					top: calc(50% - 30px);
					left: calc(50% - 30px);
					font-size: 60px;
					color: white;
					opacity: 0;
					transition: 0.5s;
				}
				:host(:hover) div {
					opacity: 0.5;
				}
				:host(:hover) pk-icon {
					opacity: 1;
				}
			</style>
			<pk-link path=${path} active=${active}>
				<div></div>
				<pk-icon type=${type}></pk-icon>
				<slot></slot>
			</pk-link>
		`;
	}
}
//
window.customElements.define("pk-link-icon", PKLinkIcon);
