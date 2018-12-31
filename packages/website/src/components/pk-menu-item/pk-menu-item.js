import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import "../pk-link/pk-link";
import "../pk-icon/pk-icon";
//
class PKMenuItem extends LitElement {
	static get properties() {
		return {
			caption: { type: String },
			hideCaption: { type: Boolean },
			active: { type: Boolean },
			path: { type: String },
			icon: { type: String }
		};
	}

	constructor() {
		super();
		this.caption = "";
		this.path = "/";
		this.active = false;
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
		const { caption, path, icon } = this;
		return html`
			${sharedStyle}
			<style>
				pk-link {
					display: block;
					position: relative;
					padding: 4px 12px 4px 9px;
					font-size: 25px;
					text-decoration: none;
					white-space: nowrap;
					transition: 0.5s;
					border-left: 3px solid transparent;
				}

				:host([active]) pk-link {
					border-left-color: #0078d4;
				}
				:host(:hover) pk-link {
					background-color: #d0d0d0;
				}

				div {
					line-height: 24px;
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

					/* THEME LIGHT */
					background-color: #222;
					color: #878d99;
				}
				:host(:hover) div {
					opacity: 1;
					visibility: visible;
				}

				pk-icon {
					color: #444;
				}

				@media (max-width: 1023px) {
					:host {
						display: inline-block;
					}
					pk-link {
						display: inline-block;
						width: 48px;
						height: 48px;
						padding: 0;
						text-align: center;
						border-left: none;
						padding-left: 3px;
					}
					pk-icon {
						margin-top: 12px;
					}
					:host([active]) pk-link {
						border-bottom: 3px solid #0078d4;
						border-left: 0;
					}
					div {
						display: none;
					}
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
