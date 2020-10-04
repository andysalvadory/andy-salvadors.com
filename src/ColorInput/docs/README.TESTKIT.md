### Testkit API


| method             | arguments | returned value     | description                                 |
| ------------------ | --------- | ------------------ | ------------------------------------------- |
| exists             | -         | `Promise<boolean>` | Returns true if element in the DOM          |
| element            | -         | `Promise<element>` | Returns the component element               |
| cancel             | -         | `Promise<void>`    | Cancels color selection                     |
| confirm            | -         | `Promise<void>`    | Confirms color selection                    |
| clickColorViewer   | -         | `Promise<void>`    | Clicks on color viewer box                  |
| enterText          | string    | `Promise<void>`    | Enters text to color input                  |
| getValue           | -         | `Promise<string>`  | Returns the input value                     |
| hasError           | -         | `Promise<boolean>` | Returns whether there is an error           |
| getPlaceholder     | -         | `Promise<string>`  | Returns the placeholder of the input        |
| getSize            | -         | `Promise<string>`  | Return whether the input size               |
| isDisabled         | -         | `Promise<boolean>` | Returns whether the input is disabled       |
| colorPickerVisible | -         | `Promise<boolean>` | Returns whether the color picker is visible |
| click              | -         | `Promise<void>`    | Clicks on input                             |                 

### ReactTestUtils Example

```javascript
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ColorInput from 'wix-style-react/ColorInput';
import { colorInputTestkitFactory } from 'wix-style-react/dist/testkit';

const div = document.createElement('div');
const dataHook = 'myDataHook';

const component = (
  <div>
    <ColorInput value="#FFFFFF" dataHook={dataHook} />
  </div>
);

const wrapper = div.appendChild(
  ReactTestUtils.renderIntoDocument(component, { dataHook })
);

const testkit = colorInputTestkitFactory({ wrapper, dataHook });

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```

### Enzyme Example

```javascript
import React from 'react';
import { mount } from 'enzyme';
import ColorInput from 'wix-style-react/ColorInput';
import { colorInputTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

const dataHook = 'myDataHook';
const wrapper = mount(
  <div>
    <ColorInput value="#FFFFFF" dataHook={dataHook} />
  </div>
);

const testkit = colorInputTestkitFactory({ wrapper, dataHook });

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```

### Puppeteer Example

> Element should be rendered with a data-hook into the DOM `<ColorInput dataHook="myDataHook" />`

```javascript
import puppeteer from 'puppeteer';
import { colorInputTestkitFactory } from 'wix-style-react/dist/testkit/puppeteer';

//puppeteer setup
const browser = await puppeteer.launch();
const page = await browser.newPage();

//Create an element testkit via the data-hook attribute
const testkit = await colorInputTestkitFactory({
  dataHook: 'myDataHook',
  page,
});
await page.goto('/page-where-ColorInput-appears'); //Your application url

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```

### Protractor Example

> Element should be rendered with a data-hook into the DOM `<ColorInput dataHook="myDataHook" />`

```javascript
import { colorInputTestkitFactory } from 'wix-style-react/dist/testkit/protractor';

//Create an element testkit via the data-hook attribute
const testkit = colorInputTestkitFactory({ dataHook: 'myDataHook' });

await browser.get('/page-where-ColorInput-appears'); //Your application url

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```
