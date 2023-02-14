import { App } from "obsidian";

import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";
import { MaybeUnsafe } from "../helpers";

import { WorkspaceUndocumented } from "./workspace";
import { PluginManagerUndocumented } from "./plugin-manager";
import { StyleManagerUndocumented } from "./style-manager";
import { ViewRegistryUndocumented } from "./view-registry";
import { SettingManagerUndocumented } from "./setting-manager";

/**
 * The Obsidian {@link App} object, with undocumented and private APIs included.
 */
export type AppUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> = App &
	ForVersion<v1_0_0, V, Latest, {

		readonly workspace: WorkspaceUndocumented<V, U>;
		readonly plugins: PluginManagerUndocumented<V, U>;
		readonly viewRegistry: ViewRegistryUndocumented<V, U>;
		readonly customCss: StyleManagerUndocumented<V, U>;
		readonly setting: SettingManagerUndocumented<V, U>;

	}>;
