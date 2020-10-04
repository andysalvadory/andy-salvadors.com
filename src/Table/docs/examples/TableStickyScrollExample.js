/* eslint-disable */

class TableStickyScrollExample extends React.Component {
  rowCount = 4;
  columnCount = 20;

  range = (max) => Array.from(Array(max).keys()).map(i => i + 1);

  data = this.range(this.rowCount).map(rowIndex =>
    this.range(this.columnCount).reduce(
      (rows, columnIndex) => ({
        ...rows,
        [`value${columnIndex}`]: `Value ${columnIndex}-${rowIndex}`,
      }),
      {},
    )
  );

  render() {
    return (
      <Table
        horizontalScroll
        stickyColumns={2}
        showSelection
        data={this.data}
        columns={
          this.range(this.columnCount).map(columnIndex => ({
            title: `Column ${columnIndex}`,
            render: row => row[`value${columnIndex}`],
            width: 150,
          }))
        }
      >
        <Table.Content />
      </Table>
    );
  }
}
