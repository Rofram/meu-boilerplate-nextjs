import { extendObservable } from "mobx";

export function extendStore(
  target: object,
  source: Record<string, unknown>
) {
  let toExtend: Record<string, unknown> = {};
  let toAssign: Record<string, unknown> = {};

  for (let key in source) {
    if (target.hasOwnProperty(key)) {
      toAssign[key] = source[key];
    } else {
      toExtend[key] = source[key];
    }
  }

  Object.assign(target, toAssign);
  extendObservable(target, toExtend);
}