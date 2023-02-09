# obsidian-undocumented
[![latest supported version](https://img.shields.io/badge/Obsidian-1.1.0_--_1.1.9-blue?logo=obsidian)](https://obsidian.md/) [![total downloads](https://img.shields.io/npm/dt/obsidian-undocumented?label=Total&logo=npm)](https://www.npmjs.com/package/obsidian-undocumented)

An extension to the official [`obsidian`](https://www.npmjs.com/package/obsidian) type definitions that provides access to undocumented and internal Obsidian APIs.

This project aims to provide quality typings that are relevant across a range of public Obsidian versions.


## Installation
Use `npm` or `yarn` to install type definitions for undocumented Obsidian APIs:

```bash
npm install obsidian-undocumented
```

## Usage
Import the type definitions and use the `as` keyword to cast the official, documented API type into the unofficial one.

```typescript
import {Plugin} from "obsidian";
import {App} from "obsidian-undocumented";

export default MyPlugin extends Plugin {
	async onload() {
		// Get the enabled instance of the "other-plugin" plugin.
		const otherPlugin = (this.app as App).plugins.getPlugin("other-plugin");
		otherPlugin.doSomething();
	}
}
```

### Unsafe API
There are two flavors of type definitions available: the default (safe) definitions, and the `unsafe` definitions. The safe definitions provide typings for harmless functions and fields, and the unsafe definitions provide typings that can accidentally break Obsidian or be abused to manipulate other plugins.

The definition flavors can be picked by either importing `obsidian-undocumented` for the safe definitions or `obsidian-undocumented/unsafe` for the unsafe ones.

**Example:**

```typescript
import {Plugin} from "obsidian";
import {App} from "obsidian-undocumented/unsafe";

export default MyPlugin extends Plugin {
	async onload() {
		(this.app as App).plugins.disablePlugin(this.manifest.id);
	}
}
```

### Targeting Specific Obsidian Versions
If your plugin has different logic for different Obsidian versions, it is possible to select type definitions matching the specific version. All of the definitions exported by `obsidian-undocumented` contain a generic parameter `V`, which should be a string for one of the [supported versions](#supported-versions).

If the parameter is omitted, type definitions will be selected for the latest Obsidian version that is supported by this package.

**Example:**

```typescript
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

```


## Supported Versions
Undocumented API type definitions are available for the following Obsidian versions:

- [1.1.9](https://github.com/obsidianmd/obsidian-releases/releases/tag/v1.1.9) (default)
- [1.1.8](https://github.com/obsidianmd/obsidian-releases/releases/tag/v1.1.8)
- [1.0.3](https://github.com/obsidianmd/obsidian-releases/releases/tag/v1.0.3)
- [1.0.0](https://github.com/obsidianmd/obsidian-releases/releases/tag/v1.0.0)

There are currently no plans to support pre-release or beta versions of Obsidian.
