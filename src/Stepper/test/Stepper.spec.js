import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import Stepper from '../Stepper';
import { STEP_TYPES, ACTIVE_STEP, MIN_STEPS, MAX_STEPS } from '../Consts';
import { stepperPrivateDriverFactory } from './Stepper.private.uni.driver';

const steps7 = [
  { text: 'some step' },
  { text: 'some step' },
  { text: 'some step' },
  { text: 'some step' },
  { text: 'some step' },
  { text: 'some step' },
  { text: 'some step' },
];

describe('Stepper', () => {
  const createDriver = createUniDriverFactory(stepperPrivateDriverFactory);

  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest
      .spyOn(global.console, 'error')
      .mockImplementation(jest.fn());
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe('Stepper', () => {
    describe('Props validation', () => {
      it('should warn when activeStep prop is not passed to stepper', async () => {
        createDriver(<Stepper />);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: The prop `activeStep` is marked as required in `Stepper`, but its value is `undefined`.',
          ),
        );
      });

      it('should warn when activeStep prop is not a number', async () => {
        createDriver(
          <Stepper
            activeStep={{ text: 'step2' }}
            steps={[{ text: 'step1', type: 'completed' }, { text: 'step2' }]}
          />,
        );
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: Invalid prop `activeStep` of type `object` supplied to `Stepper`, expected `number`',
          ),
        );
      });

      it('should warn when a step does not contain a text', async () => {
        createDriver(
          <Stepper activeStep={0} steps={[{ type: 'completed' }]} />,
        );
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: The prop `steps[0].text` is marked as required in `Stepper`, but its value is `undefined`',
          ),
        );
      });

      it('should warn when steps length is less than 2', async () => {
        createDriver(<Stepper activeStep={0} steps={[{ text: 'step 1' }]} />);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            `Error: Failed prop: The prop 'steps' in 'Stepper' has to be an array in the size of ${MIN_STEPS} to ${MAX_STEPS}.`,
          ),
        );
      });

      it('should warn when steps length is bigger than 7', async () => {
        const steps8 = [
          { text: 'step 1' },
          { text: 'step 2' },
          { text: 'step 3' },
          { text: 'step 4' },
          { text: 'step 5' },
          { text: 'step 6' },
          { text: 'step 7' },
          { text: 'step 8' },
        ];
        createDriver(<Stepper activeStep={1} steps={steps8} />);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            `Error: Failed prop: The prop 'steps' in 'Stepper' has to be an array in the size of ${MIN_STEPS} to ${MAX_STEPS}.`,
          ),
        );
      });

      it('should warn when active step has type disabled', async () => {
        const steps = [
          { text: 'step 1' },
          { text: 'step 2', type: 'disabled' },
          { text: 'step 3' },
        ];
        createDriver(<Stepper activeStep={1} steps={steps} />);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            `Error: Failed prop: The prop 'steps' at [1] is invalid. Active step can not be disabled. Falling back to 'normal' type for step[1]`,
          ),
        );
      });
    });
    describe('Clickable', () => {
      describe('Disabled step', () => {
        it('should not be clickable', async () => {
          const onClick = jest.fn();
          const steps = [{ text: 'some step', type: STEP_TYPES.DISABLED }];
          const driver = createDriver(
            <Stepper onClick={onClick} steps={steps} />,
          );

          await driver.clickStep(0);
          expect(onClick).not.toBeCalled();
        });
      });
      describe('Active step', () => {
        it('should not be clickable', async () => {
          const onClick = jest.fn();
          const steps = [{ text: 'some step' }];
          const driver = createDriver(
            <Stepper onClick={onClick} steps={steps} activeStep={0} />,
          );

          await driver.clickStep(0);
          expect(onClick).not.toBeCalled();
        });
      });
      describe('Completed step ', () => {
        it('should be clickable', async () => {
          const onClick = jest.fn();
          const steps = [{ text: 'some step', type: STEP_TYPES.COMPLETED }];
          const driver = createDriver(
            <Stepper onClick={onClick} steps={steps} />,
          );

          await driver.clickStep(0);
          expect(onClick).toBeCalled();
        });
      });
      describe('Normal step ', () => {
        it('should be clickable', async () => {
          const onClick = jest.fn();
          const steps = [{ text: 'some step' }, { text: 'some step' }];
          const driver = createDriver(
            <Stepper onClick={onClick} steps={steps} activeStep={0} />,
          );

          await driver.clickStep(1);
          expect(onClick).toBeCalled();
        });
      });
      describe('Error step ', () => {
        it('Step with type error should be clickable', async () => {
          const onClick = jest.fn();
          const steps = [{ text: 'some step', type: STEP_TYPES.ERROR }];
          const driver = createDriver(
            <Stepper onClick={onClick} steps={steps} />,
          );

          await driver.clickStep(0);
          expect(onClick).toBeCalled();
        });
      });
    });
    describe('Render', () => {
      it('Should render all given steps', async () => {
        const onClick = jest.fn();
        const driver = createDriver(
          <Stepper onClick={onClick} steps={steps7} activeStep={1} />,
        );
        expect(await driver.getNumberOfSteps()).toEqual(steps7.length);
      });

      it('Should render exactly one active step', async () => {
        const onClick = jest.fn();
        const driver = createDriver(
          <Stepper onClick={onClick} steps={steps7} activeStep={1} />,
        );

        for (let i = 0; i < steps7.length; i++) {
          if (i === 1) {
            expect(await driver.isStepActive(i)).toEqual(ACTIVE_STEP);
          } else {
            expect(await driver.isStepActive(i)).not.toEqual(ACTIVE_STEP);
          }
        }
      });

      it('Should render normal & completed & error & disabled step types properly', async () => {
        const onClick = jest.fn();
        const allKindOfSteps = [
          { text: 'normal step' },
          { text: 'disabled step', type: STEP_TYPES.DISABLED },
          { text: 'completed step', type: STEP_TYPES.COMPLETED },
          { text: 'error step', type: STEP_TYPES.ERROR },
        ];
        const driver = createDriver(
          <Stepper onClick={onClick} steps={allKindOfSteps} activeStep={0} />,
        );
        expect(await driver.getStepType(0)).toEqual(STEP_TYPES.NORMAL);
        expect(await driver.getStepType(1)).toEqual(STEP_TYPES.DISABLED);
        expect(await driver.getStepType(2)).toEqual(STEP_TYPES.COMPLETED);
        expect(await driver.getStepType(3)).toEqual(STEP_TYPES.ERROR);
      });
    });
  });
});
