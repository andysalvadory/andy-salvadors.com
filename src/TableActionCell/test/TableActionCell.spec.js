import React from 'react';
import eventually from 'wix-eventually';
import {
  createRendererWithDriver,
  cleanup,
} from '../../../test/utils/react/index';
import TableActionCell from '../TableActionCell';
import { tableActionCellPrivateDriverFactory } from './TableActionCell.private.driver';

const primaryActionProps = (actionTrigger = () => {}, disabled = false) => ({
  primaryAction: {
    text: 'primary action',
    skin: 'standard',
    onClick: actionTrigger,
    disabled,
  },
});

const secondaryActionsProps = ({ actionTriggers, actionDataHooks } = {}) => {
  const createAction = n => ({
    text: `Action ${n}`,
    dataHook: actionDataHooks && actionDataHooks[n],
    icon: <span>{`Icon ${n}`}</span>, // simulate the icon as <span> elements
    onClick: (actionTriggers && actionTriggers[n]) || (() => {}),
  });

  return {
    secondaryActions: Array(4)
      .fill()
      .map((val, idx) => createAction(idx)),
    numOfVisibleSecondaryActions: 2,
  };
};

describe('Table Action Cell', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(tableActionCellPrivateDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    it("should have a placeholder when there's only a primary action", async () => {
      const { driver } = render(<TableActionCell {...primaryActionProps()} />);
      expect(await driver.primaryActionPlaceholderExists()).toBe(true);
    });

    it('should display the primary action button', async () => {
      const onPrimaryActionTrigger = jest.fn();

      const { driver } = render(
        <TableActionCell {...primaryActionProps(onPrimaryActionTrigger)} />,
      );

      expect(await driver.getPrimaryActionButtonDriver().exists()).toBe(true);
      expect(
        await driver.getPrimaryActionButtonDriver().getButtonTextContent(),
      ).toEqual('primary action');
    });

    it('should trigger the primary action on primary button click', async () => {
      const onPrimaryActionTrigger = jest.fn();

      const { driver } = render(
        <TableActionCell {...primaryActionProps(onPrimaryActionTrigger)} />,
      );

      await driver.clickPrimaryActionButton();
      expect(onPrimaryActionTrigger).toHaveBeenCalledTimes(1);
    });

    it('should not have a primary action placeholder when there are also secondary actions', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
        />,
      );

      expect(await driver.primaryActionPlaceholderExists()).toBe(false);
    });

    it('should put visible secondary actions in the cell', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps({
            actionDataHooks: [undefined, 'data-hook-for-1'],
          })}
        />,
      );

      expect(await driver.getVisibleActionsCount()).toEqual(2);

      expect(
        await driver.getVisibleActionButtonDriver(0).getButtonTextContent(),
      ).toEqual('Icon 0');
      expect(
        await driver
          .getVisibleActionByDataHookButtonDriver('data-hook-for-1')
          .getButtonTextContent(),
      ).toEqual('Icon 1');

      const tooltipDriver1 = await driver.getVisibleActionTooltipDriver(0);
      const tooltipDriver2 = await driver.getVisibleActionByDataHookTooltipDriver(
        'data-hook-for-1',
      );

      expect(tooltipDriver1.getTooltipText()).toEqual('Action 0');
      expect(tooltipDriver2.getTooltipText()).toEqual('Action 1');
    });

    it('should put hidden secondary action in a PopoverMenu', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
        />,
      );

      expect(await driver.getHiddenActionsPopoverMenuDriver().exists()).toEqual(
        true,
      );

      await driver.clickPopoverMenu();
      await eventually(async () =>
        expect(await driver.getHiddenActionsCount()).toEqual(2),
      );
    });

    it('should trigger secondary action on click', async () => {
      const actionTriggers = Array(4)
        .fill()
        .map(() => jest.fn());

      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps({
            actionTriggers,
            actionDataHooks: [
              undefined,
              'data-hook-for-1',
              undefined,
              'data-hook-for-3',
            ],
          })}
        />,
      );

      await driver.clickVisibleAction(0);
      await driver.clickVisibleActionByDataHook('data-hook-for-1');

      await driver.clickPopoverMenu();
      await eventually(() => driver.clickHiddenAction(0));

      await driver.clickPopoverMenu();
      await eventually(
        async () => await driver.clickHiddenActionByDataHook('data-hook-for-3'),
      );

      await eventually(() =>
        actionTriggers.forEach(async actionTrigger => {
          await expect(actionTrigger).toHaveBeenCalledTimes(1);
        }),
      );
    });

    it('should render disabled hidden actions', async () => {
      const actionTrigger = jest.fn();
      const disabledAction = {
        text: `Disabled Action`,
        icon: <span>Icon</span>,
        onClick: actionTrigger,
        disabled: true,
      };
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          secondaryActions={[disabledAction]}
          numOfVisibleSecondaryActions={0}
        />,
      );

      await driver.clickPopoverMenu();

      await eventually(async () => await driver.clickHiddenAction(0));

      expect(actionTrigger).not.toHaveBeenCalled();
    });

    it('should allow to change the number of visible secondary actions', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
          numOfVisibleSecondaryActions={3}
        />,
      );

      expect(await driver.getVisibleActionsCount()).toEqual(3);

      await driver.clickPopoverMenu();
      await eventually(async () =>
        expect(await driver.getHiddenActionsCount()).toEqual(1),
      );
    });

    it('should allow to have no visible secondary actions', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
          numOfVisibleSecondaryActions={0}
        />,
      );

      expect(await driver.getVisibleActionsCount()).toEqual(0);

      await driver.clickPopoverMenu();
      await eventually(async () =>
        expect(await driver.getHiddenActionsCount()).toEqual(4),
      );
    });

    it('should mark the primary action as disabled', async () => {
      const { driver } = render(
        <TableActionCell {...primaryActionProps(() => {}, true)} />,
      );

      expect(await driver.getIsPrimaryActionButtonDisabled()).toBe(true);
    });

    describe('when a secondary action is disabled', () => {
      it('should mark the a visible secondary actions as disabled', async () => {
        const actionTrigger = jest.fn();

        const disabledAction = {
          text: `Disabled Action`,
          icon: <span>Icon</span>,
          onClick: actionTrigger,
          disabled: true,
        };

        const { driver } = render(
          <TableActionCell
            {...primaryActionProps()}
            secondaryActions={[disabledAction]}
            numOfVisibleSecondaryActions={1}
          />,
        );

        const isDisabled = await driver
          .getVisibleActionButtonDriver(0)
          .isButtonDisabled();
        expect(isDisabled).toBe(true);
      });

      describe('when disabledTooltipText is supplied', () => {
        it('should show correct tooltip text', async () => {
          const actionTrigger = jest.fn();

          const disabledAction = {
            text: `Disabled Action`,
            icon: <span>Icon</span>,
            onClick: actionTrigger,
            disabled: false,
            disabledDescription: 'disabled item tooltip text',
          };

          const { driver } = render(
            <TableActionCell
              {...primaryActionProps()}
              secondaryActions={[disabledAction]}
              numOfVisibleSecondaryActions={1}
            />,
          );

          const tooltipDriver = await driver.getVisibleActionTooltipDriver(0);
          expect(tooltipDriver.getTooltipText()).toEqual('Disabled Action');
        });
      });

      describe('when disabledTooltipText is not supplied', () => {
        it('should show correct tooltip text', async () => {
          const actionTrigger = jest.fn();

          const disabledAction = {
            text: `Disabled Action`,
            icon: <span>Icon</span>,
            onClick: actionTrigger,
            disabled: false,
          };

          const { driver } = render(
            <TableActionCell
              {...primaryActionProps()}
              secondaryActions={[disabledAction]}
              numOfVisibleSecondaryActions={1}
            />,
          );

          const tooltipDriver = await driver.getVisibleActionTooltipDriver(0);
          expect(tooltipDriver.getTooltipText()).toEqual('Disabled Action');
        });
      });
    });
  }
});
