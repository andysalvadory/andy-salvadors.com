/* TODO - Remove this utils file when Madefor is ready to use */

function isWindowDefined() {
  return typeof window === 'object';
}

export function isMadefor() {
  return isWindowDefined() && window['useMadeforFont'];
}

export function setMadefor(value) {
  if (isWindowDefined()) {
    if (value) window['useMadeforFont'] = value;
    else delete window['useMadeforFont'];
  }
}

export function madeforRegular(fallback) {
  return isMadefor() ? 'normal' : fallback;
}

export function madeforBold(fallback) {
  return isMadefor() ? 'bold' : fallback;
}
