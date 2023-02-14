import { v1_0_0, v1_0_3, v1_1_8, v1_1_9, Version } from "./versions";

// Version comparsion helpers.
export type VersionsLessThan<V extends Version> = Exclude<VersionsLessThanOrEqualTo<V>, V>;
export type VersionsGreaterThan<V extends Version> = Exclude<Version, VersionsLessThanOrEqualTo<V>>;
export type VersionsGreaterThanOrEqualTo<V extends Version> = V | VersionsGreaterThan<V>;
export type VersionsLessThanOrEqualTo<V extends Version> =
	(V extends v1_0_0 ? v1_0_0 : never) |
	(V extends v1_0_3 ? (v1_0_0 | v1_0_3) : never) |
	(V extends v1_1_8 ? (v1_0_0 | v1_0_3 | v1_1_8) : never) |
	(V extends v1_1_9 ? (v1_0_0 | v1_0_3 | v1_1_8 | v1_1_9) : never);
	// We have a pyramid because TypeScript won't do recursive expansion.

/**
 * Includes the type T if and only if the Current version is between the Minimum and Maximum version, inclusive.
 */
export type ForVersion<Minimum extends Version, Current extends Version, Maximum extends Version, T, F = never> =
	Current extends VersionsGreaterThanOrEqualTo<Minimum> & VersionsLessThanOrEqualTo<Maximum> ? T : F;
