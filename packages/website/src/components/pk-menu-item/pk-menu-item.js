import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-link/pk-link";
import "../pk-icon/pk-icon";
//
class PKMenuItem extends LitElement {
	static get properties() {
		return {
			caption: { type: String },
			hideCaption: { type: Boolean },
			path: { type: String },
			icon: { type: String }
		};
	}

	constructor() {
		super();
		this.caption = "";
		this.path = "/";
		this.icon = null;
		this.hideCaption = false;
	}

	renderIcon(icon, caption) {
		if (icon) {
			return html`
				<pk-icon type=${icon}></pk-icon>
			`;
		}
		return ``;
	}

	renderCaption(caption) {
		if (caption && this.hideCaption === false) {
			return html`
				<div>${caption}</div>
			`;
		}
		return ``;
	}

	render() {
		const { caption, path, icon, hideCaption } = this;
		return html`
			<style>
				:host {
					display: inline-block;
					font-size: 25px;
					width: 48px;
					height: 48px;
					padding: 0;
					text-align: center;
					border-left: none;
					padding-left: 3px;
					position: relative;
					font-size: 25px;
					text-decoration: none;
					white-space: nowrap;
					transition: 0.5s;
				}
				pk-icon {
					margin-top: 12px;
				}
			</style>
			<pk-link path=${path}>
				${this.renderIcon(icon, caption)} ${this.renderCaption(caption)}
			</pk-link>
		`;
	}
}
//
window.customElements.define("pk-menu-item", PKMenuItem);
