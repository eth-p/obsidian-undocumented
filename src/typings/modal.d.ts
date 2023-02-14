import { ForVersion } from "../version-helpers";
import { Latest, v1_0_0, Version } from "../versions";
import { MaybeUnsafe, ReferencedExport } from "../helpers";

import { AppUndocumented } from "./app";
import { Modal } from "obsidian";

/**
 * The settings manager for Obsidian and its settings dialog.
 */
export type ModalUndocumented<V extends Version = Latest, U extends MaybeUnsafe = false> =
	Modal
	& {
		readonly app: ReferencedExport<AppUndocumented<V, U>>;
	}
	& ForVersion<v1_0_0, V, Latest, {


		/**
		 * Whether the modal should have a dim background.
		 */
		readonly dimBackground: boolean;

	}>;
