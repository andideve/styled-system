export function omit(object: Record<string | number, any> = {}, keys: string[] = []) {
  const result = { ...object };
  for (const key of keys) {
    delete result[key];
  }

  return result;
}

export default omit;
