# Testing - Enzyme

Testing with Enzyme requires some configuration in order to work with React.
This is a basic configuration, for more information read [Enzyme docs](https://enzymejs.github.io/enzyme/).
```jsx
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```

In this example, we have an app that ask the users for their favorite fruit.
The app is built as a `<Card/>` containing a simple dropdown to pick the fruit from, and a submit button.

We'll use `<Dropdown/>`'s testkit to simulate the fruit picking and `<Button/>`'s testkit to simulate a click event.
```jsx
import React from 'react';
import { mount } from 'enzyme';
import { Card, Layout, Cell, FormField, Dropdown, Button } from 'wix-style-react';
import { ButtonTestkit, DropdownTestkit } from 'wix-style-react/dist/testkit/enzyme';

const App = props => {
  const [value, setValue] = React.useState('');
  return (
    <Card>
      <Card.Content>
        <Layout>
          <Cell>
            <FormField label="Pick a fruit">
              <Dropdown
                dataHook="app-dropdown"
                onSelect={({ value }) => setValue(value)}
                options={[
                  { id: 0, value: 'Apple' },
                  { id: 1, value: 'Banana' },
                  { id: 2, value: 'Orange' },
                ]}
              />
            </FormField>
          </Cell>

          <Cell>
            <Button
              dataHook="app-button"
              onClick={props.onSubmit(value)}
            >
              Submit
            </Button>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
}

describe('React testing library example', () => {
  it('should select banana', async () => {
    const onSubmitCallback = jest.fn();
    const wrapper = mount(<App onSubmit={onSubmitCallback} />);

    const dropdownDriver = DropdownTestkit({
      wrapper,
      dataHook: 'app-dropdown',
    });

    const buttonDriver = ButtonTestkit({
      wrapper,
      dataHook: 'app-button',
    });

    // Verify that all testkits found the right components
    expect(await dropdownDriver.exists()).toBe(true);
    expect(await buttonDriver.exists()).toBe(true);

    // Select the option with id number 1 aka banana!
    await dropdownDriver.driver.selectOptionById(1);
    // Click the submit button
    await buttonDriver.click();

    // Check that banana is the chosen fruit!
    expect(onSubmitCallback).toHaveBeenCalledWith('Banana');
  });
});
```
