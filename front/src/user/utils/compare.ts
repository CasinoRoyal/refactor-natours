export function compare<T> (values: T, comparedValues: T): boolean { 
  return JSON.stringify(values) !== JSON.stringify(comparedValues); 
};