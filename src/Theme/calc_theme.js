function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function hexToHSL(H) {
  let { r, g, b } = hexToRgb(H);
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l + 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s * -1, l];
}

module.exports = function calc_theme(color) {
  const [h, s, l] = hexToHSL(color);
  return {
    '--wsr-theme-color-00': `hsl(${h}, ${s}%, ${l}%)`,
    '--wsr-theme-color-05': `hsl(${h}, ${s}%, ${l + 5}%)`,
    '--wsr-theme-color-10': `hsl(${h}, ${s}%, ${l + 10}%)`,
    '--wsr-theme-color-20': `hsl(${h}, ${s}%, ${l + 20}%)`,
    '--wsr-theme-color-30': `hsl(${h}, ${s}%, ${l + 30}%)`,
    '--wsr-theme-color-40': `hsl(${h}, ${s}%, ${l + 40}%)`,
    '--wsr-theme-color-50': `hsl(${h}, ${s}%, ${l + 50}%)`,
    '--wsr-theme-color-60': `hsl(${h}, ${s}%, ${l + 60}%)`,
    '--wsr-theme-color-00-24': `hsla(${h}, ${s}%, ${l}%, 0.24)`,
    '--wsr-theme-color-00-42': `hsla(${h}, ${s}%, ${l}%, 0.42)`,
    '--wsr-theme-color-00-48': `hsla(${h}, ${s}%, ${l}%, 0.48)`,
    '--wsr-theme-color-30-20': `hsla(${h}, ${s}%, ${l + 30}%, 0.2)`,
  };
};
