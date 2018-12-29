import { LitElement, html } from "@polymer/lit-element";
//
import "../pk-icon/pk-icon";
//
class PKFormInputText extends LitElement {
	static get properties() {
		return {
			icon: { type: String },
			placeholder: { type: String }
		};
	}

	render() {
		const { icon, placeholder } = this;
		return html`
			<style>
				:host {
					display: block;
					position: relative;
					margin-bottom: 1rem;
				}
				input {
					box-sizing: border-box;
					border-color: #ddd;
					font-size: 14px;
					padding-right: 35px;
					border-radius: 0;
					display: block;
					width: 100%;
					height: calc(2.25rem + 2px);
					padding: 0.375rem 0.75rem;
					line-height: 1.5;
					color: #495057;
					background-color: #fff;
					background-clip: padding-box;
					border: 1px solid #ced4da;
					transition: border-color 0.15s;
					outline: none;
				}
				input:focus {
					border-color: #0078d4;
					box-shadow: none;
				}
				input:focus + pk-icon {
					color: #0078d4;
				}
				pk-icon {
					position: absolute;
					top: 9px;
					right: 10px;
					font-size: 19px;
					color: #aaa;
				}
			</style>
			<input
				type="text"
				name="NameSurname"
				class="form-control"
				placeholder=${placeholder}
				required=""
			/>
			${
				icon
					? html`
							<pk-icon type=${icon}></pk-icon>
					  `
					: ""
			}
		`;
	}
}
//
window.customElements.define("pk-form-input-text", PKFormInputText);
