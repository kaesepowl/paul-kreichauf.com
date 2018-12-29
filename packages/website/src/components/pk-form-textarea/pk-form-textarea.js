import { LitElement, html } from "@polymer/lit-element";
//
class PKFormTextarea extends LitElement {
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
					box-sizing: border-box;
					display: block;
					position: relative;
					margin-bottom: 1rem;
					width: 100%;
				}
				textarea {
					box-sizing: border-box;
					background-color: #fff;
					border-color: #ddd;
					resize: none;
					outline: none;

					display: block;
					width: 100%;
					height: calc(2.25rem + 2px);
					padding: 0.375rem 0.75rem;
					font-size: 1rem;
					line-height: 1.5;
					color: #495057;
					background-color: #fff;
					background-clip: padding-box;
					border: 1px solid #ced4da;
					border-radius: 0.25rem;
					transition: border-color 0.15s ease-in-out,
						box-shadow 0.15s ease-in-out;

					height: auto;

					font-size: 14px;
					padding-right: 35px;
					border-radius: 0;
				}
				textarea:focus {
					border-color: #0078d4;
					box-shadow: none;
				}
				textarea:focus + pk-icon {
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
			<textarea
				type="text"
				cols="30"
				,
				rows="5"
				name="NameSurname"
				class="form-control"
				placeholder=${placeholder}
				required=""
			></textarea>
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
window.customElements.define("pk-form-textarea", PKFormTextarea);
