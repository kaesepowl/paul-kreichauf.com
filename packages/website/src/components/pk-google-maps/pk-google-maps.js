import { LitElement, html } from "@polymer/lit-element";
//
import sharedStyle from "../../styles/shared";
//TODO refactor this
const googleMapsLoadedPromise = new Promise(r => (window.__initGoodMap = r));
let initCalled = false;
const loadGoogleMapsApi = () => {
	if (initCalled === false) {
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?v=quarterly&key=AIzaSyCFzB75ihltJ6OHgPJ5AiA0gRFp4CQ0sBY&callback=__initGoodMap`;
		document.head.appendChild(script);
		initCalled = true;
	}
	return googleMapsLoadedPromise;
};
//
class PKGoogleMaps extends LitElement {
	static get properties() {
		return {
			latitude: { type: Number },
			longitude: { type: Number },
			zoom: { type: Number }
		};
	}

	async connectedCallback() {
		await loadGoogleMapsApi();
		//
		this.map = new google.maps.Map(
			this.shadowRoot.getElementById("content"),
			{
				center: {
					lng: this.longitude,
					lat: this.latitude
				},
				zoom: this.zoom
			}
		);
	}

	render() {
		return html`
			<style>
				:host {
					display: block;
					width: 100%;
					height: 100%;
				}
				#content {
					width: 100%;
					height: 100%;
				}
			</style>
			<div id="content"></div>
		`;
	}
}
//
window.customElements.define("pk-google-maps", PKGoogleMaps);
