export const simple = `() => {
  const items = [
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: (
        <TextButton weight="normal" size="small">
          suffix button
        </TextButton>
      ),
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      id: 1,
      label: 'Quote #8 Accepted: Website setup, $7.00',
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
  ];

  return <Card><Card.Content><Timeline items={items} /></Card.Content></Card>;
}`;
