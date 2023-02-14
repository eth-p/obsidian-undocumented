import { EventRef, ViewCreator } from "obsidian";

import { MaybeUnsafe, UnsafeExport, UnsafeWritable } from "../helpers";
import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";

/**
 * The view registry.
 *
 * This contains the metadata and creator functions for registered view types and supported file types.
 */
export type ViewRegistryUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	ForVersion<v1_0_0, V, Latest, {

		/**
		 * A dictionary associating a file extension to a view.
		 *
		 * The file extensions are represented as lower-case strings without the leading `.`.
		 */
		readonly typeByExtension: UnsafeWritable<U, { [key: string]: string }>;

		/**
		 * A dictionary associating a view type to its {@link ViewCreator} function.
		 */
		readonly viewByType: UnsafeWritable<U, { [key: string]: ViewCreator }>;

		/**
		 * Gets the view type registered for a given file extension.
		 * The file extension must be lower-case and not start with a leading `.`.
		 *
		 * @param ext The file extension.
		 * @returns The view type, or undefined if no view type was registered for the provided file extension.
		 */
		getTypeByExtension(ext: string): string | undefined;

		/**
		 * Gets the {@link ViewCreator} function for a given view type.
		 *
		 * @param type The view type.
		 * @returns The creator function, or undefined if not registered.
		 */
		getViewCreatorByType(type: string): ViewCreator | undefined;

		/**
		 * Checks if a view type was registered for the given file extension.
		 * The file extension must be lower-case and not start with a leading `.`.
		 *
		 * @param ext The file extension.
		 * @returns True if the file extension was registered.
		 */
		isExtensionRegistered(ext: string): boolean;

		/**
		 * Unregistered zero or more file extensions.
		 * The file extension must be lower-case and not start with a leading `.`.
		 *
		 * @param exts The file extensions to unregister.
		 */
		unregisterExtensions: UnsafeExport<U, (exts: string[]) => void>;

		/**
		 * Registers zero or more file extensions to a given view type.
		 * The file extension must be lower-case and not start with a leading `.`.
		 *
		 * @warning This will silently succeed even if the view type was not registered.
		 * @param exts The file extensions to register.
		 * @param type The view type to associate with the file extensions.
		 * @throws {@link Error} if any of the extensions were already registered.
		 */
		registerExtensions: UnsafeExport<U, (exts: string[], type: string) => void>;

		/**
		 * Registers a view type.
		 *
		 * @param type The view type to register.
		 * @param creator The {@link ViewCreator} function for the view.
		 * @throws {@link Error} that view type was already registered.
		 */
		registerView: UnsafeExport<U, (type: string, creator: ViewCreator) => void>;

		/**
		 * Unregisters a view type.
		 *
		 * @param type The view type to unregister.
		 */
		unregisterView: UnsafeExport<U, (type: string, creator: ViewCreator) => void>;

		/**
		 * Registers a view type with associated file extensions.
		 *
		 * @param type The view type to register.
		 * @param exts The file extensions to register.
		 * @param creator The {@link ViewCreator} function for the view.
		 * @throws {@link Error} that view type was already registered.
		 * @throws {@link Error} if any of the extensions were already registered.
		 */
		registerViewWithExtensions: UnsafeExport<U, (type: string, exts: string[], creator: ViewCreator) => void>;

		/**
		 * Adds an event listener for when a new view is registered.
		 *
		 * @param event The event name.
		 * @param listener The event listener.
		 */
		on(event: 'view-registered', listener: (type: string) => void): EventRef;

		/**
		 * Adds an event listener for when a view is unregistered.
		 *
		 * @param event The event name.
		 * @param listener The event listener.
		 */
		on(event: 'view-unregistered', listener: (type: string) => void): EventRef;

		/**
		 * Adds an event listener for when file extensions are added or removed.
		 * The extensions must be found from the keys of the `typeByExtension` property.
		 *
		 * @param event The event name.
		 * @param listener The event listener.
		 */
		on(event: 'extensions-updated', listener: () => void): EventRef;

	}>;
