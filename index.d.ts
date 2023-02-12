import { AppUndocumented } from "./src/typings/app";
import { ModalUndocumented } from "./src/typings/modal";
import { PluginManagerUndocumented, PluginManifestUndocumented } from "./src/typings/plugin-manager";
import { StyleManagerUndocumented, ThemeManifestUndocumented } from "./src/typings/style-manager";
import { ViewRegistryUndocumented } from "./src/typings/view-registry";
import { FloatingSplitUndocumented, FloatingSplitWindowUndocumented, WorkspaceUndocumented } from "./src/typings/workspace";
import { Latest, Version } from "./src/versions";

export * from "./src/versions";
export * from "./src/types";

type UnsafeEnabled = false;
export type App<V extends Version = Latest> = AppUndocumented<V, UnsafeEnabled>;
export type Workspace<V extends Version = Latest> = WorkspaceUndocumented<V, UnsafeEnabled>;
export type FloatingSplit<V extends Version = Latest> = FloatingSplitUndocumented<V, UnsafeEnabled>;
export type FloatingSplitWindow<V extends Version = Latest> = FloatingSplitWindowUndocumented<V, UnsafeEnabled>;
export type PluginManager<V extends Version = Latest> = PluginManagerUndocumented<V, UnsafeEnabled>;
export type PluginManifest<V extends Version = Latest> = PluginManifestUndocumented<V, UnsafeEnabled>;
export type ViewRegistry<V extends Version = Latest> = ViewRegistryUndocumented<V, UnsafeEnabled>;
export type StyleManager<V extends Version = Latest> = StyleManagerUndocumented<V, UnsafeEnabled>;
export type ThemeManifest<V extends Version = Latest> = ThemeManifestUndocumented<V, UnsafeEnabled>;
export type Modal<V extends Version = Latest> = ModalUndocumented<V, UnsafeEnabled>;
