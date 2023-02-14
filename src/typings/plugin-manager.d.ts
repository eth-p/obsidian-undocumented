import { Plugin } from "obsidian";

import { MaybeUnsafe, UnsafeExport, UnsafeWritable } from "../helpers";
import { PluginID } from "../types";
import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";

/**
 * The plugin manager for community plugins.
 *
 * This does not handle "core" (builtin) plugins.
 */
export type PluginManagerUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	ForVersion<v1_0_0, V, Latest, {

		/**
		 * A dictionary of installed community plugin manifests.
		 *
		 * This contains manifests for both enabled and disabled plugins.
		 */
		manifests: Readonly<{[key: PluginID]: UnsafeWritable<U, PluginManifestUndocumented<V, U>>}>;

		/**
		 * Enables a community plugin.
		 *
		 * @param pluginID The ID of the plugin to enable.
		 */
		enablePlugin: UnsafeExport<U, (pluginID: PluginID) => Promise<boolean>>;

		/**
		 * Enables a community plugin and saves the settings to plugins.json.
		 *
		 * @param pluginID The ID of the plugin to enable.
		 */
		enablePluginAndSave: UnsafeExport<U, (pluginID: PluginID) => Promise<boolean>>;

		/**
		 * Disables a community plugin.
		 *
		 * @param pluginID The ID of the plugin to disable.
		 */
		disablePlugin: UnsafeExport<U, (pluginID: PluginID) => Promise<void>>;

		/**
		 * Disables a community plugin and saves the settings to plugins.json.
		 *
		 * @param pluginID The ID of the plugin to disable.
		 */
		disablePluginAndSave: UnsafeExport<U, (pluginID: PluginID) => Promise<void>>;

		/**
		 * Gets a community plugin instance.
		 *
		 * @param pluginID The ID of the plugin.
		 * @returns The {@link Plugin} instance, or null if no plugin with that ID is enabled.
		 */
		getPlugin: (pluginID: PluginID) => Plugin|null;

		/**
		 * Gets the path to the folder where plugins are loaded from.
		 * This is relative to the vault root.
		 */
		getPluginFolder: () => string;

		/**
		 * Checks if community plugins are enabled in the current vault.
		 * @returns True, unless you somehow managed to load a plugin in restricted mode.
		 */
		isEnabled: () => boolean;

		/**
		 * Sets whether community plugins are enabled or not.
		 * If enabled is false, restricted mode will be turned on.
		 *
		 * @param enabled
		 */
		setEnable: UnsafeExport<U, (enabled: boolean) => Promise<void>>;

		// TODO:
		// checkForDeprecations: ƒ ()
		// checkForUpdates: ƒ ()
		// initialize: ƒ ()
		// installPlugin: ƒ (e,t,n)
		// isDeprecated: ƒ (e)
		// loadManifest: ƒ (e)
		// loadManifests: ƒ ()
		// loadPlugin: ƒ (e)
		// saveConfig: ƒ ()
		// uninstallPlugin: ƒ (e)
		// unloadPlugin: ƒ (e)

		/**
		 * A {@link Set} containing the plugin IDs of all community plugins that are currently loaded.
		 */
		enabledPlugins: UnsafeWritable<U, Set<PluginID>>;

		/**
		 * A dictionary of plugin instances.
		 */
		plugins: UnsafeExport<U, {[key: PluginID]: Plugin}>;

	}>;


/**
 * A plugin manifest.
 */
export type PluginManifestUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	ForVersion<v1_0_0, V, Latest, {
		readonly id: PluginID;
		readonly author: string;
		readonly authorUrl?: string;
		readonly description: string;
		readonly dir: string;
		readonly isDesktopOnly: boolean;
		readonly minAppVersion: string;
		readonly name: string;
		readonly version: string;
	}>;
