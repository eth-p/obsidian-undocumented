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
		 */
		readonly theme: string;

		/**
		 * The `<style>` element used to add the theme styles to the DOM.
		 */
		readonly styleEl: HTMLStyleElement;

		// TODO:
		// oldThemes: []
		// queue: e {promise: Promise}
		// requestLoadSnippets: ƒ ()
		// requestLoadTheme: ƒ ()
		// requestReadThemes: ƒ ()

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
