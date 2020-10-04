/* eslint-disable */

class Sizes extends React.Component {
  render() {
    return (
      <>
        <TagList
          tags={[
            { id: '1', children: 'Tag 1' },
            { id: '2', children: 'Tag 2' },
            { id: '3', children: 'Tag 3' },
          ]}
          actionButton={{ label: 'Button' }}
        />
        <TagList
          size="medium"
          tags={[
            { id: '1', children: 'Tag 1' },
            { id: '2', children: 'Tag 2' },
            { id: '3', children: 'Tag 3' },
          ]}
          actionButton={{ label: 'Button' }}
        />
        <TagList
          size="large"
          tags={[
            { id: '1', children: 'Tag 1' },
            { id: '2', children: 'Tag 2' },
            { id: '3', children: 'Tag 3' },
          ]}
          actionButton={{ label: 'Button' }}
        />
      </>
    );
  }
}
