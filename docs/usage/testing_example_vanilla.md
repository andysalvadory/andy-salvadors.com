# Testing - React testing library

In this example, we have an app that ask the users for their favorite fruit.
The app is built as a `<Card/>` containing a simple dropdown to pick the fruit from, and a submit button.

We'll use `<Dropdown/>`'s testkit to simulate the fruit picking and `<Button/>`'s testkit to simulate a click event.

```jsx
import React from 'react';
import { render } from '@testing-library/react';
import { Card, Layout, Cell, FormField, Dropdown, Button } from 'wix-style-react';
import { ButtonTestkit, DropdownTestkit } from 'wix-style-react/dist/testkit';

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
  it('should select banana!', async () => {
    const onSubmitCallback = jest.fn();
    const wrapper = render(<App onSubmit={onSubmitCallback} />).baseElement;

    // Initialize fruit choosing dropdown testkit
    const dropdownDriver = DropdownTestkit({
      wrapper,
      dataHook: 'app-dropdown',
    });

    // Initialize submit button testkit
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

