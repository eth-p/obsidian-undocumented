//
// NOTE: REQUIRES UNSAFE API.
//

import { Plugin } from "obsidian";
import { App } from "obsidian-undocumented/unsafe";

export default class ExamplePlugin extends Plugin {
	async onload() {
		await this.reloadPluginById("other-plugin");
	}

	async reloadPluginById(id: string) {
		const app = this.app as App;

		if (id in app.plugins.enabledPlugins) {
			await app.plugins.disablePlugin(id);
			await app.plugins.enablePlugin(id);
		}
	}
}
