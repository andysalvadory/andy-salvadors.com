# Testing - Best Practices

### Common testkit methods
All testkits have base functionality.

#### `exists` method
Returns true if component exists.

Use this method in order to verify the testkit found a component with the given `dataHook`.

```jsx
import React from 'react';
import { render } from '@testing-library/react';
import { Input } from 'wix-style-react';
import { InputTestkit } from 'wix-style-react/dist/testkit';

describe('Input testkit', () => {
  it('should exist', async () => {
    const inputDriver = InputTestkit({
      wrapper: render(<Input dataHook="app-input" />).baseElement,
      dataHook: 'app-input',
    });

    expect(await inputDriver.exists()).toBe(true);
  });
});
```

#### `click` method
Simulates a click event on the root element of the component.

Although it's not relevant to every component, you can use this method to click the component.
In some cases it will change an inner state of the component, in other cases the component might gain focus, etc.

```jsx
import React from 'react';
import { render } from '@testing-library/react';
import { CheckToggle } from 'wix-style-react';
import { CheckToggleTestkit } from 'wix-style-react/dist/testkit';

describe('CheckToggle testkit', () => {
  it('should click the CheckToggle', async () => {
    const checkToggleDriver = CheckToggleTestkit({
      wrapper: render(<CheckToggle dataHook="app-check-toggle" />).baseElement,
      dataHook: 'app-check-toggle',
    });

    expect(await checkToggleDriver.isChecked()).toBe(false);
    await checkToggleDriver.click();
    expect(await checkToggleDriver.isChecked()).toBe(true);
  });
});
```

#### `element` method
Returns the root element of the component.

Most components have a strict API, allowing specific values: boolean, string, number, etc.
In some cases the API can be more loose, allowing using **any** custom content.
Those cases can be tough to test sometimes, because the testkit don't know exactly what to expect.

Let's look at the following code.
In this example we use a `<Button/>` with a custom content.
Although in most cases a button content is expected to be a string, our API allows any custom node.

So for the obvious case, `<Button/>`'s testkit provide a `getButtonTextContent()` method, but when it comes to a custom node, we use the `element` method.
```jsx
import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'wix-style-react';
import { ButtonTestkit } from 'wix-style-react/dist/testkit';

describe('Button testkit', () => {
  it('should get custom child', async () => {
    const text = 'hello world';
    const buttonDriver = ButtonTestkit({
      wrapper: render(
        <Button dataHook="app-button">
          <div data-hook="custom-content">hello world</div>
        </Button>
      ).baseElement,
      dataHook: 'app-button',
    });

    const rootElement = await buttonDriver.element();
    const customContent = rootElement.querySelector('[data-hook="custom-content"]')

    expect(customContent.textContent).toBe(text);
  });
});
```
_Don't abuse this method! Use it with caution, for you can never rely on the inner structure of the component._
Trust us to provide a test API that covers all your needs.
