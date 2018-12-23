import { LitElement, html } from "@polymer/lit-element";
//
class PkContentButton extends LitElement {
	static get properties() {
		return {
			icon: { type: String },
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
		const { icon, hideCaption } = this;
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				:host {
					box-sizing: border-box;
					display: inline-block;
					margin: 0 5px;
				}
				a {
					font-weight: bold;
					text-decoration: none;
					height: 45px;
					min-width: 44px;
					line-height: 45px;
					text-align: center;
					display: inline-block;
					border-radius: 48px;
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
					padding: 0 23px;
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
			<a href="javascript:;">
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
