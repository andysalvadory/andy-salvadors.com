import React from 'react';
import RadioButton from './RadioButton';
import radioButtonDriverFactory from './RadioButton.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { radioButtonTestkitFactory } from '../../../testkit';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';
import { radioButtonTestkitFactory as enzymeRadioButtonTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';
import { cleanup } from '../../../test/utils/unit';

describe('RadioButton', () => {
  const createDriver = createDriverFactory(radioButtonDriverFactory);

  afterEach(cleanup);

  it('should render', () => {
    const driver = createDriver(<RadioButton />);
    expect(driver.exists()).toBe(true);
  });

  describe('checked prop', () => {
    it('should not be checked', () => {
      const driver = createDriver(<RadioButton value="1" />);
      expect(driver.isChecked()).toBe(false);
    });

    it('should be checked', () => {
      const driver = createDriver(<RadioButton value="1" checked />);
      expect(driver.isChecked()).toBe(true);
    });
  });

  describe('disabled prop', () => {
    it('should not be disabled', () => {
      const driver = createDriver(<RadioButton value="1" />);
      expect(driver.isDisabled()).toBe(false);
    });

    it('should be disabled', () => {
      const driver = createDriver(<RadioButton value="1" disabled />);
      expect(driver.isDisabled()).toBe(true);
    });
  });

  describe('label (children prop)', () => {
    it('should have a label', () => {
      const label = 'myLabel';
      const driver = createDriver(<RadioButton value="1">{label}</RadioButton>);
      expect(driver.getLabel()).toBe(label);
    });

    it('should return the label element', () => {
      const label = 'myLabel';
      const driver = createDriver(<RadioButton value="1">{label}</RadioButton>);
      expect(driver.getLabelElement() instanceof HTMLLabelElement).toBe(true);
    });
  });

  describe('onChange prop', () => {
    it('should call onChange', () => {
      const onChange = jest.fn();
      const value = 1;
      const driver = createDriver(
        <RadioButton value={value} onChange={onChange} />,
      );

      expect(onChange).not.toHaveBeenCalled();
      driver.check();
      expect(onChange).toBeCalledWith(value);
    });

    it('should not call onChange if already checked', () => {
      const onChange = jest.fn();
      const value = 1;
      const driver = createDriver(
        <RadioButton value={value} onChange={onChange} checked />,
      );
      driver.check();
      expect(onChange).not.toBeCalledWith(value);
    });

    it('should not call onChange if disabled', () => {
      const onChange = jest.fn();
      const value = 1;
      const driver = createDriver(
        <RadioButton value={value} onChange={onChange} disabled />,
      );
      driver.check();
      expect(onChange).not.toBeCalledWith(value);
    });
  });

  describe('value prop', () => {
    it('should not have value', () => {
      const driver = createDriver(<RadioButton />);
      expect(driver.getValue()).toBe('');
    });

    it('should have value', () => {
      const value = '1';
      const driver = createDriver(<RadioButton value={value} />);
      expect(driver.getValue()).toBe(value);
    });
  });

  describe('tabindex prop', () => {
    it('should set tabIndex to 0 by default', () => {
      const driver = createDriver(<RadioButton value="1" />);

      expect(driver.getTabIndex()).toEqual('0');
    });

    it('should set tabIndex according to tabIndex prop', () => {
      const driver = createDriver(<RadioButton value="1" tabIndex={3} />);

      expect(driver.getTabIndex()).toEqual('3');
    });

    it('should not be focusable if disabled prop is true', () => {
      const driver = createDriver(<RadioButton value="1" disabled />);

      expect(driver.getTabIndex()).toEqual(null);
    });
  });

  describe('content prop', () => {
    it('should render node from that prop', () => {
      const driver = createDriver(<RadioButton content={<span>Hello</span>} />);
      expect(driver.getContent().textContent).toBe('Hello');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<RadioButton />, radioButtonTestkitFactory)).toBe(
        true,
      );
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <RadioButton />,
          enzymeRadioButtonTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
