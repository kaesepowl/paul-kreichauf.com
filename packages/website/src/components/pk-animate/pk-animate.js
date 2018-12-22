import { LitElement, html } from "@polymer/lit-element";
//
class PKAnimate extends LitElement {
	static get properties() {
		return {
			type: { type: String }
		};
	}

	constructor() {
		super();
		this.type = null;
	}

	async startAnimation(type) {
		await this.updateComplete;
		//
		if (this.type !== null) {
			this.clearAnimation();
		}
		//
		this.type = type;
		//
		const classList = this.getAnimateContainerClassList();
		classList.add("animated");
		classList.add(this.type);
	}

	clearAnimation() {
		const classList = this.getAnimateContainerClassList();
		classList.remove("animated");
		classList.remove(this.type);
		//
		this.type = null;
	}

	getAnimateContainerClassList() {
		return this.shadowRoot.getElementById("animateContainer").classList;
	}

	animationEnd(e) {
		//
		if (this.type !== null) {
			this.clearAnimation();
		}
		//
		this.dispatchEvent(
			new CustomEvent("animationFinish", {
				detail: {}
			})
		);
	}

	render() {
		return html`
			<link
				rel="stylesheet"
				href="/node_modules/animate.css/animate.css"
			/>
			<style>
				:host {
					display: block;
					position: absolute;
					width: 100%;
					height: 100%;
				}
				div {
					position: absolute;
					width: 100%;
					height: 100%;
				}
				.animated {
					animation-duration: 0.5s;
				}
			</style>
			<div
				id="animateContainer"
				@animationend=${e => this.animationEnd()}
			>
				<slot></slot>
			</div>
		`;
	}
}
//
window.customElements.define("pk-animate", PKAnimate);
