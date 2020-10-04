import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, Editor, CompositeDecorator } from 'draft-js';
import { convertFromHTML } from 'draft-convert';
import classNames from 'classnames';

import styles from './RichTextInputArea.scss';
import RichTextToolbar from './Toolbar/RichTextToolbar';
import EditorUtilities from './EditorUtilities';
import { RichTextInputAreaContext } from './RichTextInputAreaContext';
import { defaultTexts } from './RichTextInputAreaTexts';
import StatusIndicator from '../StatusIndicator';

const decorator = new CompositeDecorator([
  {
    strategy: EditorUtilities.findLinkEntities,
    component: ({ contentState, entityKey, children }) => {
      const { url } = contentState.getEntity(entityKey).getData();

      return (
        <a
          data-hook="richtextarea-link"
          href={url}
          className={styles.link}
          target="_blank"
          // Avoids a potentially serious vulnerability for '_blank' links
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
]);

class RichTextInputArea extends React.PureComponent {
  static errorStatus = 'error';

  constructor(props) {
    super(props);

    const { texts: consumerTexts } = props;

    this.state = {
      editorState: EditorState.createEmpty(decorator),
      texts: {
        toolbarButtons: {
          ...defaultTexts.toolbarButtons,
          ...consumerTexts.toolbarButtons,
        },
        insertionForm: {
          ...defaultTexts.insertionForm,
          ...consumerTexts.insertionForm,
        },
      },
    };
  }
  componentDidMount() {
    const { initialValue } = this.props;

    // TODO: currently it treats the value as an initial value
    this._updateContentByValue(initialValue);
  }

  render() {
    const {
      dataHook,
      placeholder,
      disabled,
      maxHeight,
      status,
      statusMessage,
    } = this.props;
    const isEditorEmpty = EditorUtilities.isEditorEmpty(this.state.editorState);
    const hasError = !disabled && status === RichTextInputArea.errorStatus;

    return (
      <div
        data-hook={dataHook}
        className={classNames(
          styles.root,
          !isEditorEmpty && styles.hidePlaceholder,
          disabled && styles.disabled,
          hasError && styles.error,
        )}
        // Using CSS variable instead of applying maxHeight on each child, down to the editor's content
        style={{ '--max-height': maxHeight }}
      >
        <RichTextInputAreaContext.Provider
          value={{
            texts: this.state.texts,
          }}
        >
          <RichTextToolbar
            dataHook="richtextarea-toolbar"
            className={styles.toolbar}
            isDisabled={disabled}
            editorState={this.state.editorState}
            onBold={this._setEditorState}
            onItalic={this._setEditorState}
            onUnderline={this._setEditorState}
            onLink={newEditorState => {
              this._setEditorState(newEditorState, () =>
                this.refs.editor.focus(),
              );
            }}
            onBulletedList={this._setEditorState}
            onNumberedList={this._setEditorState}
          />
        </RichTextInputAreaContext.Provider>
        <div className={styles.editorWrapper}>
          <Editor
            ref="editor"
            editorState={this.state.editorState}
            onChange={this._setEditorState}
            placeholder={placeholder}
            readOnly={disabled}
          />
          {hasError && (
            <span className={styles.errorIndicator}>
              <StatusIndicator
                dataHook="richtextarea-error-indicator"
                status="error"
                message={statusMessage}
              />
            </span>
          )}
        </div>
      </div>
    );
  }

  _setEditorState = (newEditorState, onStateChanged = () => {}) => {
    this.setState({ editorState: newEditorState }, () => {
      const { onChange = () => {} } = this.props;
      const htmlText = EditorUtilities.convertToHtml(newEditorState);
      const plainText = newEditorState.getCurrentContent().getPlainText();

      onChange(htmlText, { plainText });
      onStateChanged();
    });
  };

  _updateContentByValue = value => {
    const content = convertFromHTML({
      htmlToEntity: (nodeName, node, createEntity) => {
        if (nodeName === 'a') {
          return createEntity('LINK', 'MUTABLE', { url: node.href });
        }
      },
    })(value);

    const updatedEditorState = EditorState.push(
      this.state.editorState,
      content,
    );
    this.setState({ editorState: updatedEditorState });
  };

  /** Set value to display in the editor */
  setValue = value => {
    this._updateContentByValue(value);
  };
}

RichTextInputArea.displayName = 'RichTextInputArea';

RichTextInputArea.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Initial value to display in the editor */
  initialValue: PropTypes.string,
  /** Placeholder to display in the editor */
  placeholder: PropTypes.string,
  /** Disables the editor and toolbar */
  disabled: PropTypes.bool,
  /** Displays a status indicator */
  status: PropTypes.oneOf(['error']),
  /** Text to be shown within the tooltip of the status indicator */
  statusMessage: PropTypes.string,
  /** Callback function for changes: `onChange(htmlText, { plainText })` */
  onChange: PropTypes.func,
  /** Defines a maximum height for the editor (it grows by default) */
  maxHeight: PropTypes.string,
  /** Texts to be shown */
  texts: PropTypes.shape({
    toolbarButtons: PropTypes.shape({
      boldButtonLabel: PropTypes.string,
      italicButtonLabel: PropTypes.string,
      underlineButtonLabel: PropTypes.string,
      linkButtonLabel: PropTypes.string,
      bulletedListButtonLabel: PropTypes.string,
      numberedListButtonLabel: PropTypes.string,
    }),
    insertionForm: PropTypes.shape({
      confirmButtonLabel: PropTypes.string,
      cancelButtonLabel: PropTypes.string,
      link: PropTypes.shape({
        textInputPlaceholder: PropTypes.string,
        urlInputPlaceholder: PropTypes.string,
      }),
    }),
  }),
};

RichTextInputArea.defaultProps = {
  initialValue: '<p/>',
  texts: {},
  disabled: false,
};

export default RichTextInputArea;
