const ALLOW_STALE = 'allowStale';

const self = {
  allowStale: false,
  // other properties...
};

function getCachedData() {
  if (!self[ALLOW_STALE]) {
    // Stale entries are not allowed, so return undefined
    return undefined;
  }

  // Proceed with retrieving the cached data if stale entries are allowed
  // ...
}

console.log(getCachedData()); // Output: undefined
