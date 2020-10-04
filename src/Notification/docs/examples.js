const wrapWithDiv = string =>
  `<div>
  ${string}
</div>`;

const sourceForThemes = theme => `
<Notification theme="${theme}" show>
  <Notification.TextLabel>${theme} theme</Notification.TextLabel>
  <Notification.CloseButton/>
</Notification>
`;

export const themes = wrapWithDiv(
  ['standard', 'error', 'success', 'warning', 'premium']
    .map(sourceForThemes)
    .join('\n<br/>\n'),
);

export const actions = `
<div>
  <Notification show>
    <Notification.TextLabel>This notification has</Notification.TextLabel>
    <Notification.ActionButton type="textLink" onClick={() => console.log('Clicked!')}>
      text link action
    </Notification.ActionButton>
    <Notification.CloseButton />
  </Notification>

  <br/>

  <Notification show>
    <Notification.TextLabel>This notification has</Notification.TextLabel>
    <Notification.ActionButton onClick={() => console.log('Clicked!')}>
      button
    </Notification.ActionButton>
    <Notification.CloseButton />
  </Notification>
</div>
`;

export const ellipsis = `
<div>
    <Notification show>
      <Notification.TextLabel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Notification.TextLabel>
      <Notification.ActionButton onClick={() => console.log('Clicked!')}>
      button
    </Notification.ActionButton>
      <Notification.CloseButton />
    </Notification>
    <br/>
    <Notification show>
      <Notification.TextLabel ellipsis={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Notification.TextLabel>
      <Notification.ActionButton onClick={() => console.log('Clicked!')}>
      button
    </Notification.ActionButton>
      <Notification.CloseButton />
    </Notification>
</div>
`;
