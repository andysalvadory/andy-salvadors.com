import { calcColors } from './utils';

export default function FloatingPanels({ mainColor, ...rest } = {}) {
  return {
    ...calcColors(mainColor),
    ...rest,
  };
}
