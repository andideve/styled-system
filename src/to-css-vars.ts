import { isObject, MyObject } from '@andideve/sx-core';
import { omit } from '@andideve/sx-utils';

interface VarNameOptions {
  prefix?: string;
  transform?: (key: string) => string;
}

const generateVarName = (_keys: string[], { prefix, transform = k => k }: VarNameOptions = {}) => {
  const keys = [..._keys];
  if (prefix) keys.unshift(prefix);

  return `--${keys.map(transform).join('-')}`;
};

interface Options extends VarNameOptions {
  omitKeys?: string[];
}

export function toCSSVars(_theme: MyObject = {}, { omitKeys, ...varNameOptions }: Options = {}) {
  const theme = omitKeys ? omit(_theme, omitKeys) : _theme;
  const result: MyObject<string> = {};
  (function add(object: MyObject, parrentKeys: string[] = []) {
    for (const key in object) {
      if (isObject(object[key])) {
        add(object[key], [...parrentKeys, key]);
        continue;
      }
      result[generateVarName([...parrentKeys, key], varNameOptions)] = object[key];
    }
  })(theme);

  return result;
}

export default toCSSVars;
