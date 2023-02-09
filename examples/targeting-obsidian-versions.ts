import { Plugin, apiVersion } from "obsidian";
import { App, v1_0_0 } from "obsidian-undocumented";

export default class ExamplePlugin extends Plugin {
	async onload() {
		if (apiVersion === '1.0.0') {
			const app = this.app as App<v1_0_0>;
			// Do something specific to API version 1.0.0
		}
	}
}
