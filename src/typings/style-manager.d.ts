import { MaybeUnsafe, UnsafeExport, UnsafeWritable } from "../helpers";
import { SnippetID, ThemeID } from "../types";
import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";

/**
 * The theme/custom CSS manager.
 */
export type StyleManagerUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
    ForVersion<v1_0_0, V, Latest, {

		/**
		 * In-memory cache of theme and snippet stylesheets.
		 *
		 * The map key is the path of the stylesheet file relative to the vault root.
		 */
		readonly csscache: UnsafeWritable<U, Map<string, string>>;

		/**
		 * Enabled snippets.
		 * Snippets are identified by the file basename without the `.css` extension.
		 */
		readonly enabledSnippets: UnsafeWritable<U, Set<SnippetID>>;

		/**
		 * A list of all the snippets that Obsidian has detected.
		 * Snippets are identified by the file basename without the `.css` extension.
		 */
		readonly snippets: UnsafeWritable<U, SnippetID[]>;

		/**
		 * A list of all the themes that Obsidian has detected.
		 * Snippets are identified by the file basename without the `.css` extension.
		 */
		readonly themes: UnsafeWritable<U, {[key: ThemeID]: ThemeManifestUndocumented<V, U>}>;

		/**
		 * An array of `<style>` elements used to add snippets styles to the DOM.
		 */
		readonly extraStyleEls: UnsafeWritable<U, HTMLStyleElement[]>;

		/**
		 * The current theme.
		 *
		 * The default theme is represented as an empty string.
		 */
		readonly theme: string | "";

		/**
		 * The `<style>` element used to add the theme styles to the DOM.
		 */
		readonly styleEl: HTMLStyleElement;

		/**
		 * Returns the path to the custom CSS snippets folder.
		 */
		getSnippetsFolder(): string;

		/**
		 * Returns the path to the snippet CSS file for the given snippet.
		 *
		 * @warning Invalid snippet IDs will still return a valid but nonexistent path.
		 *
		 * @param snippet The snippet ID.
		 * @returns The path to the snippet file.
		 */
		getSnippetPath(snippet: SnippetID): string;

		/**
		 * Returns the path to the themes folder.
		 */
		getThemeFolder(): string;

		/**
		 * Returns the path to the folder for the given theme.
		 *
		 * @warning Invalid theme IDs will still return a valid but nonexistent path.
		 *
		 * @param theme The theme ID.
		 * @returns The path to the theme folder.
		 */
		getThemePath(theme: ThemeID): string;

		/**
		 * Checks if a theme is installed.
		 * 
		 * @param theme The theme ID.
		 * @returns True if the theme ID is valid and the theme is installed.
		 */
		isThemeInstalled(theme: ThemeID): boolean;

		/**
		 * Sets the Obsidian theme.
		 *
		 * @warning If the specified theme ID is invalid or not installed, the default theme be shown.
		 * @param theme The theme ID.
		 */
		setTheme: UnsafeExport<U, (theme: ThemeID) => void>;

		/**
		 * Enables or disables a custom CSS snippet.
		 *
		 * @warning If the specified theme ID is invalid or not installed, this function will silently fail.
		 * @param snippet The snippet ID.
		 * @param enabled Whether the snippet is enabled.
		 */
		setCssEnabledStatus: UnsafeExport<U, (snippet: SnippetID, enabled: boolean) => void>;


		// TODO:
		// oldThemes: []
		// queue: e {promise: Promise}
		// requestLoadSnippets: ƒ ()
		// requestLoadTheme: ƒ ()
		// requestReadThemes: ƒ ()
		// checkForUpdate: ƒ (e)
		// checkForUpdates: ƒ ()
		// disableTranslucency: ƒ ()
		// downloadLegacyTheme: ƒ (e)
		// enableTranslucency: ƒ ()
		// hasUpdates: ƒ ()
		// getManifest: ƒ (e)
		// installLegacyTheme: ƒ (e)
		// installTheme: ƒ (e,t)
		// loadCss: ƒ (e)
		// loadData: ƒ ()
		// loadSnippets: ƒ ()
		// loadTheme: ƒ (e)
		// onRaw: ƒ (e)
		// onload: ƒ ()
		// readSnippets: ƒ (e)
		// readThemes: ƒ (e)
		// removeTheme: ƒ (e)
		// setTranslucency: ƒ (e)

	}>;

/**
 * Manifest for a theme.
 */
export type ThemeManifestUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
    ForVersion<v1_0_0, V, Latest, {
		readonly author: string;
		readonly authorUrl?: string;
		readonly dir: string;
		readonly minAppVersion: string;
		readonly name: string;
		readonly version: string;
	}>;
