import PropTypes from 'prop-types';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import DropdownLayout from '../DropdownLayout';

class AutoComplete extends InputWithOptions {
  static displayName = 'AutoComplete';

  static propTypes = {
    ...InputWithOptions.propTypes,

    /** THIS PROP WAS REMOVED */
    withArrow: DropdownLayout.propTypes.withArrow,

    /** Callback predicate for the filtering options function */
    predicate: PropTypes.func,

    /** The message to be displayed instead of options, when no options exist, or no options pass the predicate filter function */
    emptyStateMessage: PropTypes.node,
  };

  static defaultProps = {
    ...InputWithOptions.defaultProps,
    predicate: () => true,
  };

  dropdownAdditionalProps() {
    const { options, predicate, emptyStateMessage } = this.props;
    const filterFunc = this.state.isEditing ? predicate : () => true;
    const filtered = options.filter(filterFunc);

    if (emptyStateMessage && filtered.length === 0) {
      return {
        options: [
          {
            id: 'empty-state-message',
            value: emptyStateMessage,
            disabled: true,
            withArrow: false,
          },
        ],
      };
    } else {
      return { options: filtered, withArrow: false };
    }
  }
}

export default AutoComplete;
