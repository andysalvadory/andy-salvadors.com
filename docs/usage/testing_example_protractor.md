# Testing - Protractor

In this example, we have an app that ask the users for their favorite fruit.
The app is built as a `<Card/>` containing a simple dropdown to pick the fruit from, and a text element.

We'll use `<Dropdown/>`'s testkit to simulate the fruit picking and `<Text/>`'s testkit to see a change.

### App.js
```jsx
import React from 'react';
import { Card, Cell, Dropdown, FormField, Layout, Text } from 'wix-style-react';

const App = () => {
  const [value, setValue] = React.useState('');
  return (
    <Card dataHook="app-card">
      <Card.Content>
        <Layout>
          <Cell>
            <FormField label="Choose a fruit">
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
            <Text dataHook="app-text">
              {value}
            </Text>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
}

export default App;
```

### test.e2e.js
```jsx
import { browser } from 'protractor';
import { TextTestkit, DropdownTestkit } from 'wix-style-react/dist/testkit/protractor';


describe('Protractor example', () => {
  it('should select banana', async () => {
    // Protractor's initialization
    await browser.get('http://localhost:3100');

    // Initialize fruit choosing dropdown testkit
    const dropdownDriver = DropdownTestkit({
      dataHook: 'app-dropdown',
    });

    // Initialize submit button testkit
    const textDriver = TextTestkit({
      dataHook: 'app-text',
    });

    // Verify that all testkits found the right components
    expect(await textDriver.exists()).toBe(true);
    expect(await dropdownDriver.exists()).toBe(true);

    // Select the option with id number 1 aka banana!
    await dropdownDriver.driver.selectOptionById(1);

    // Check that banana is the chosen fruit!
    expect(await textDriver.getText()).toBe('Banana');
  })
});
```

