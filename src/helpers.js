import { flattenToAppURL } from '@plone/volto/helpers';
import { cloneDeepWith } from 'lodash';

export function recursiveFlattenToAppURL(obj) {
  function visitor(value, parent) {
    if (typeof value === 'string') {
      return flattenToAppURL(value);
    }
  }

  return cloneDeepWith(obj, visitor);
}

export function recursiveremoveKey(obj, key) {
  function removeKey(obj) {
    let prop;
    for (prop in obj) {
      if (prop === key) delete obj[prop];
      else if (typeof obj[prop] === 'object') removeKey(obj[prop]);
    }
    return obj;
  }

  return removeKey(cloneDeepWith(obj));
}
