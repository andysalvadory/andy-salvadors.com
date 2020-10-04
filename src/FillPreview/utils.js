import { isString } from '../utils/StringUtils';
import { isUrl } from '../utils/UrlUtils';
import resolveColor from 'color';
import { parseColorGradient } from './GradientParser';
import React from 'react';

export function safeColor(input, allowEmpty = false) {
  try {
    if (allowEmpty) {
      return input ? resolveColor(input) : resolveColor().alpha(0);
    }
    return resolveColor(input);
  } catch (error) {
    return null;
  }
}

export function safeColorGradient(input) {
  try {
    return parseColorGradient(input);
  } catch (error) {
    return null;
  }
}

const fillType = [
  {
    when: fill => isString(fill) && isUrl(fill),
    make: fill => ({ url: fill }),
  },
  {
    when: fill => isString(fill) && safeColor(fill),
    make: fill => ({ color: safeColor(fill) }),
  },
  {
    when: fill => isString(fill) && safeColorGradient(fill),
    make: fill => ({ gradient: safeColorGradient(fill) }),
  },
  {
    when: fill => React.isValidElement(fill),
    make: fill => ({ element: fill }),
  },
  {
    when: fill => !fill,
    make: () => ({ isEmpty: true }),
  },
];

export const resolveFillType = fill => {
  const maker = fillType.find(({ when }) => !!when(fill));
  if (!maker) {
    return {
      isUnknown: true,
    };
  }

  return maker.make(fill);
};

const COLOR_ICON_LIGHT = '#ffffff';
const COLOR_ICON_DARK = '#162d3d';

export function getContrastColor(colorsList) {
  const totalLights = colorsList.reduce((acc, curr) => {
    if (curr.luminosity() > 0.5) {
      return acc + 1;
    } else {
      return acc - 1;
    }
  }, 0);

  return totalLights >= 1 ? COLOR_ICON_DARK : COLOR_ICON_LIGHT;
}
