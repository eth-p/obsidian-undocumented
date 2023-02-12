/**
 * Only exported when unsafe.
 */
export type UnsafeExport<Unsafe extends MaybeUnsafe, T> = Unsafe extends true ? T : never;

/**
 * Only writable when unsafe.
 */
export type UnsafeWritable<Unsafe extends MaybeUnsafe, T> = Unsafe extends true ? T : Readonly<T>;

export type MaybeUnsafe = true | false;

/**
 * A transparent type that indicates the export is a reference to another easily-accessible object.
 */
export type ReferencedExport<T> = T;
