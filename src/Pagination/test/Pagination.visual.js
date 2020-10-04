import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../Pagination';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { paginationDriverFactory } from '../Pagination.uni.driver';

const paginationHook = 'interactive-pagination';
const paginationUnitTestkitFactory = uniTestkitFactoryCreator(
  paginationDriverFactory,
);

const createDriver = dataHook =>
  paginationUnitTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractivePagination extends React.Component {
  state = {
    currentPage: this.props.currentPage,
  };

  async componentDidMount() {
    this.props.componentDidMount && this.props.componentDidMount();
  }

  handleChange = ({ page, event }) => {
    event.preventDefault();
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Pagination
        {...this.props}
        dataHook={paginationHook}
        currentPage={this.state.currentPage}
        onChange={this.handleChange}
      />
    );
  }
}

const interactiveTests = [
  {
    describe: 'size',
    its: [
      {
        it: 'small first page',
        props: {
          totalPages: 2,
          currentPage: 1,
        },
      },
      {
        it: 'small second page',
        props: {
          totalPages: 2,
          currentPage: 1,
        },
        componentDidMount: async () => {
          const driver = createDriver(paginationHook);
          await driver.clickNextButton();
        },
      },
      {
        it: 'large 5th page',
        props: {
          totalPages: 13,
          currentPage: 5,
        },
      },
      {
        it: 'large 6th page',
        props: {
          totalPages: 13,
          currentPage: 5,
        },
        componentDidMount: async () => {
          const driver = createDriver(paginationHook);
          await driver.clickNextButton();
        },
      },
    ],
  },
];

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`Pagination${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <InteractivePagination
          {...props}
          componentDidMount={componentDidMount}
        />
      ),
    );
  });
});
