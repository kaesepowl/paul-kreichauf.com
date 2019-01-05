import { html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//
import { PKConnectedElement } from "../pk-connected-element/pk-connected-element";
import "../pk-form/pk-form";
import "../pk-form-input-text/pk-form-input-text";
import "../pk-form-textarea/pk-form-textarea";
import "../pk-form-button/pk-form-button";
import "../pk-loading/pk-loading";
//
import { formsGetSending } from "../../selectors/forms";
import { sendContactMessage } from "../../actions/forms";
//
class PkTopicFormContact extends PKConnectedElement {
	static get properties() {
		return {
			sending: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.sending = false;
	}

	firstUpdated() {
		this.shadowRoot
			.getElementById("form")
			.addEventListener("submit", () => {
				this.dispatchAction(sendContactMessage(this.getFormData()));
			});
	}

	getFormData() {
		return {
			name: this.shadowRoot.getElementById("name").value,
			email: this.shadowRoot.getElementById("email").value,
			message: this.shadowRoot.getElementById("message").value
		};
	}

	stateChanged(state) {
		const sending = formsGetSending(state).includes("contact");
		//
		if (sending !== this.sending) {
			// reset form if sending dong
			if (this.sending === true) {
				this.shadowRoot.getElementById("form").reset();
			}
			this.sending = sending;
		}
	}

	render() {
		const { sending } = this;
		return html`
			${sharedStyle}
			<style>
				:host([sending]) {
					opacity: 0.5;
				}
				.button-area {
					text-align: right;
				}
			</style>
			<pk-loading ?loading=${sending}>
				<pk-form id="form">
					<form slot="form">
						<pk-form-input-text icon="user">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name Surname"
								required
							/>
						</pk-form-input-text>
						<pk-form-input-text icon="envelope">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email Address"
								required
							/>
						</pk-form-input-text>
						<pk-form-textarea icon="comment">
							<textarea
								type="text"
								cols="30"
								rows="5"
								name="message"
								id="message"
								placeholder="Ihre Nachricht"
								required=""
							></textarea>
						</pk-form-textarea>
						<div class="button-area">
							<pk-form-button>
								<button type="submit">Send Message</button>
							</pk-form-button>
						</div>
					</form>
				</pk-form>
			</pk-loading>
		`;
	}
}
//
window.customElements.define("pk-topic-form-contact", PkTopicFormContact);
