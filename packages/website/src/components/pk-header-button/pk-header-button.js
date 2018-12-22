import { LitElement, html } from "@polymer/lit-element";
//
class PKHeaderButton extends LitElement {
	static get properties() {
		return {
			open: { type: Boolean }
		};
	}

	constructor() {
		super();

		this.open = false;
	}

	render() {
		const { open } = this;
		return html`
			<style>
				:host {
					position: absolute;
					top: 0;
					right: 0;
					width: 50px;
					height: 50px;
					cursor: pointer;
					display: block;
					background-color: #d0d0d0;
				}
				span {
					margin: -1px 0 0 -10px;
					position: absolute;
					left: 50%;
					top: 50%;
					width: 22px;
					height: 2px;
					background-color: #777777;
				}
				span:before,
				span:after {
					content: "";
					position: absolute;
					left: 0;
					top: -7px;
					width: 100%;
					height: 2px;
					transition: all 0.3s ease 0s;
					background-color: #777777;
				}
				span:after {
					top: auto;
					bottom: -7px;
				}
				span.open {
					background-color: transparent;
				}
				span.open:before {
					top: 0;
					bottom: auto;
					transform: rotate(45deg);
				}
				span.open:after {
					top: auto;
					bottom: 0;
					transform: rotate(-45deg);
				}
			</style>
			<span class=${open ? "open" : ""}></span>
		`;
	}
}
//
window.customElements.define("pk-header-button", PKHeaderButton);
