export interface Thing {}

export interface Base<T, T1> {}

export interface BaseRegistry<T, T1> {}

export interface BaseMasterRegistry<T, T1> {}

export function create<T>(): Base<
  BaseMasterRegistry<BaseRegistry<T, Thing>, Thing>,
  Thing
> {
  return {};
}
