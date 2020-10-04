import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import DataHooks from './dataHooks';

export const stepperDriverFactory = base => {
  const steps = base.$$(`[data-type=${DataHooks.step}]`);
  return {
    ...baseUniDriverFactory(base),

    /** Click step by id */
    clickStep: async idx => {
      await steps.get(idx).click();
    },

    /** Hover step by id */
    hoverStep: async idx => {
      await steps.get(idx).hover();
    },

    /** Returns the number of rendered steps */
    getNumberOfSteps: async () => {
      return await (await steps.map(i => i)).length;
    },

    /** Returns whether the step by id is active or not */
    isStepActive: async id => {
      return await steps.get(id).attr('data-active');
    },

    /** Returns the type of step by id */
    getStepType: async idx => {
      return await steps.get(idx).attr('data-step-type');
    },
  };
};
