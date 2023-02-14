import { Workspace, WorkspaceContainer, WorkspaceSplit } from "obsidian";

import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";
import { MaybeUnsafe } from "../helpers";

/**
 * The Obsidian {@link Workspace} object, with undocumented and private APIs included.
 */
export type WorkspaceUndocumented<V extends Version = Latest, U extends true|false = false> = Workspace &
	ForVersion<v1_0_0, V, Latest, {

		/**
		 * The "floating" split.
		 *
		 * This is the parent container for all secondary windows within an Obsidian workspace.
		 * Each individual window's {@link Window} object is located under the `children[].win` property.
		 */
		readonly floatingSplit: FloatingSplitUndocumented<V, U>;

	}>;

export type FloatingSplitUndocumented<V extends Version = Latest, U extends true|false = false> = WorkspaceSplit &
	ForVersion<v1_0_0, V, Latest, {
		readonly type: "floating";

		/**
		 * The floating windows of the workspace.
		 *
		 * Floating windows exist within their own V8 (JavaScript engine) contexts, but are accessible through
		 * references within the window split object. What this means is that:
		 *
		 *   1. The {@link Window} of the floating window is not the same instance as the plugin's `window`.
		 *   2. The DOM of the floating window can only be accessed through the floating window split.
		 *   3. The Obsidian `app` instance is shared shared between all windows and the plugin.
		 */
		children: Array<FloatingSplitWindowUndocumented<V, U>>;
	}>;

export type FloatingSplitWindowUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> = WorkspaceContainer &
	ForVersion<v1_0_0, V, Latest, {
		readonly type: "window";

		/**
		 * The children of the floating window split.
		 * This may either be the window's tab bar, or a split parent.
		 */
		readonly children: [WorkspaceSplit];

		/**
		 * The floating window's {@link Window} object.
		 * This is a reference to the floating window's V8 context.
		 */
		readonly win: Window;

		/**
		 * The floating window's {@link Window} object.
		 * This has its own V8 context.
		 */
		readonly doc: Document;

		/**
		 * The root node of the floating window.
		 * This will have the class `app-container`.
		 */
		readonly rootEl: HTMLDivElement;

		/**
		 * The root split container.
		 */
		readonly containerEl: HTMLDivElement;
	}>;
