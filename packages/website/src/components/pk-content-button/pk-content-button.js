import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
class PkContentButton extends LitElement {
	static get properties() {
		return {
			icon: { type: String },
			link: { type: String },
			hideCaption: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.hideCaption = false;
	}

	renderIcon(icon) {
		if (icon) {
			return html`
				<pk-icon type=${icon}></pk-icon>
			`;
		}
		return ``;
	}

	render() {
		const { icon, hideCaption, link } = this;
		return html`
			${sharedStyle}
			<style>
				:host {
					display: inline-block;
					margin: 0 5px;
				}
				a {
					font-weight: bold;
					text-decoration: none;
					height: 45px;
					min-width: 45px;
					line-height: 52px;
					text-align: center;
					display: inline-block;
					border-radius: 50px;
					transition: 0.5s;

					/* THEME LIGHT */
					border: 1px solid #e5e5e5;
					color: #444;
				}
				a:hover {
					/* THEME LIGHT */
					border-color: transparent;
					color: #fff;
					background-color: #0078d4;
				}
				span {
					padding: 0 24px;
					position: relative;
					top: -4px;
					/* THEME LIGHT */
					color: #444;
				}
				a:hover pk-icon,
				a:hover span {
					color: #fff;
				}
				pk-icon {
					font-size: 26px;
				}
				span pk-icon {
					position: relative;
					top: 4px;
				}
			</style>
			<a href=${link} target="_blank">
				${
					hideCaption
						? this.renderIcon(icon)
						: html`
								<span>
									${this.renderIcon(icon)}<slot></slot
								></span>
						  `
				}
			</a>
		`;
	}
}
//
window.customElements.define("pk-content-button", PkContentButton);
