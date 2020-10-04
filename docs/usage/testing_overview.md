# Testing

## Motivation

After creating beautiful apps with `wix-style-react` components, you might want to test your code to avoid mistakes.
Along with each component, we expose a `testkit` utility which is set of test methods.

During development, a component should be treated as a black box.
When it comes to testing, we can use the component `testkit` in order to reveal internal values, states, and even interact with the tested compoent.

For example, `<Input>`'s testkit expose `getValue()` and `clickClear()` methods.
- Use the `getValue()` method in order to reveal the internal value of the input.
- Use the `clickClear()` method in order to clear the input.

With these test methods, we can easily interact with the component without knowing it's internal structure.
This saves us inspecting DOM, looking for a desired element, triggering events and so on.

## How to use testkits

For example, we wrote this awesome app that renders a `<Header/>` with text based on an `<Input/>` value:

```jsx
import React from 'react';
import { Input, Heading } from 'wix-style-react';

export class App extends React.Component {
  state = {
    title: 'hello world',
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <Heading>{title}</Heading>
        <Input onChange={this.handleChange} />
      </div>
    );
  }
}
```

Now we want to test that value typed in `<Input>` will be shown in `<Heading>`.

#### DataHooks
To initialize a testkit properly, a component need to be marked with a `dataHook`.
This is a common prop which every `wix-style-react` component has:

```diff
      <div>
-       <Heading>{title}</Heading>
+       <Heading dataHook="app-heading">{title}</Heading>

-       <Input onChange={this.handleChange} />
+       <Input dataHook="app-input" onChange={this.handleChange} />
      </div>
```

#### Importing a testkit

Wix-style-react currently supports 4 testing platforms.
Choose one and import the relevant component from it.

```js
// ReactTestUtils
import { InputTestkit } from 'wix-style-react/dist/testkit';
// Enzyme
import { InputTestkit } from 'wix-style-react/dist/testkit/enzyme';
// Protractor
import { InputTestkit } from 'wix-style-react/dist/testkit/protractor';
// Puppeteer
import { InputTestkit } from 'wix-style-react/dist/testkit/puppeteer';
```

_Note: A testkit's name is always the name of the component following the word Testkit._

#### Initializing a testkit

Once we imported the relevant testkit from the desired testing platform, two parameters are needed in order to initialize it:
1. `wrapper` - A platform specific React node containing the component we want to test.
2. `dataHook` - A string that matches the same `dataHook` of component we want to test.

In this example we use `InputTestkit` from `ReactTestUtils`:

```jsx
import { InputTestkit } from 'wix-style-react/dist/testkit';
import { render } from '@testing-library/react';

import App from './App';

const inputDriver = InputTestkit({
  wrapper: render(<App />).baseElement,
  dataHook: 'app-input',
});
```

This is a way of telling `InputTestkit`: hey, here's a `wrapper`, please find component with this `dataHook` in there and return me a testkit.

#### Using a Testkit

Once you have imported and initialized the testkit, it is time to use it.
Note that all of our testkits are asynchronous and require use of `async/await` (or similar approach).

For example:

```jsx
describe('My App', () => {
  it('should get the correct value', async () => {
    expect(await inputDriver.getValue()).toEqual('hello world');
  });
});
```

### Next steps
For further reading visit our best practices page and advanced examples.
