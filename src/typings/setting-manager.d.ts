import { App, PluginSettingTab } from "obsidian";

import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";
import { MaybeUnsafe, ReferencedExport, UnsafeExport, UnsafeWritable } from "../helpers";

import { AppUndocumented } from "./app";
import { ModalUndocumented } from "./modal";

/**
 * The settings manager for Obsidian and its settings dialog.
 */
export type SettingManagerUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	ModalUndocumented<V, U> &
    ForVersion<v1_0_0, V, Latest, {

		/**
		 * The active setting tab.
		 * This will be `null` of the settings modal is not open.
		 */
		readonly activeTab: SettingTabUndocumented<V, U>|null;

		/**
		 * The ID of the active tab.
		 */
		readonly lastTabId: string;

		/**
		 * An array of plugin tabs.
		 */
		readonly pluginTabs: UnsafeWritable<U, SettingTabUndocumented<V,U>[]>;

		readonly corePluginTabContainer: UnsafeExport<U, HTMLDivElement>;
		readonly corePluginTabHeaderGroup: UnsafeExport<U, HTMLDivElement>;
		readonly communityPluginTabContainer: UnsafeExport<U, HTMLDivElement>;
		readonly communityPluginTabHeaderGroup: UnsafeExport<U, HTMLDivElement>;
		readonly tabHeadersEl: UnsafeExport<U, HTMLDivElement>;
		readonly tabContainer: UnsafeExport<U, HTMLDivElement>;
		readonly tabContentContainer: UnsafeExport<U, HTMLDivElement>;

		/**
		 * Checks if a setting tab is a plugin setting tab.
		 * @param tab The setting tab.
		 */
		isPluginSettingTab(tab: SettingTabUndocumented<V, U>): boolean;

		/**
		 * Opens the setting window.
		 */
		open(): void;

		/**
		 * Opens a setting tab with the given ID.
		 * This will <i>not</i> open the window; use {@link open} to open it.
		 *
		 * @param id The tab ID.
		 */
		openTabById(id: string): void;

		// TODO:
		// addSettingTab: ƒ (e)
		// closeActiveTab: ƒ ()
		// openTab: ƒ (e)
		// openTabById: ƒ (e)
		// removeSettingTab: ƒ (e)
		// updateModalTitle: ƒ (e)
		// updatePluginSection: ƒ ()

	}>;

/**
 * Common base class for a setting tab.
 */
export type SettingTabUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	{
		readonly app: ReferencedExport<AppUndocumented<V, U>>;
	}
	& ForVersion<v1_0_0, V, Latest, {

		/**
		 * The ID of the tab.
		 */
		readonly id: string;

		/**
		 * The name of the tab.
		 */
		readonly name: string;

		/**
		 * A reference to the Obsidian {@link App}.
		 */
		readonly app: ReferencedExport<AppUndocumented<V, U>>;

		/**
		 * A reference to the Obsidian {@link SettingManager}.
		 */
		readonly setting: ReferencedExport<SettingManagerUndocumented<V, U>>;

		/**
		 * The DOM element containing the setting tab contents.
		 */
		readonly containerEl: UnsafeExport<U, HTMLDivElement>;

		/**
		 * The DOM element that represents the setting tab itself.
		 * On Obsidian desktop, this is the sidebar item.
		 */
		readonly navEl: UnsafeExport<U, HTMLDivElement>;

	}>;

export type PluginSettingTabUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	PluginSettingTab
    & SettingTabUndocumented<V, U>
	& ForVersion<v1_0_0, V, Latest, {

	}>;
