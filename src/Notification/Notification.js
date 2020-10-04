import React, { Children } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';
import TextLabel from './TextLabel';
import ActionButton from './ActionButton';
import styles from './Notification.st.css';
import StatusComplete from 'wix-ui-icons-common/StatusComplete';
import StatusWarning from 'wix-ui-icons-common/StatusWarning';
import StatusAlert from 'wix-ui-icons-common/StatusAlert';
import { dataHooks } from './constants';

export const LOCAL_NOTIFICATION = 'local';
export const GLOBAL_NOTIFICATION = 'global';
export const STICKY_NOTIFICATION = 'sticky';
export const DEFAULT_AUTO_HIDE_TIMEOUT = 6000;
export const DEFAULT_TIMEOUT = DEFAULT_AUTO_HIDE_TIMEOUT;

const animationsTimeouts = {
  enter: 500,
  exit: 350,
};

const themeIcon = {
  error: <StatusAlert className={styles.iconStyling} />,
  success: <StatusComplete className={styles.iconStyling} />,
  warning: <StatusWarning className={styles.iconStyling} />,
};

function FirstChild(props) {
  const childrenArray = Children.toArray(props.children);
  return childrenArray[0] || null;
}

function mapChildren(children) {
  const childrenArray = Children.toArray(children);
  return childrenArray.reduce((childrenAsMap, child) => {
    switch (child.type.displayName) {
      case 'Notification.TextLabel':
        childrenAsMap.label = child;
        break;
      case 'Notification.ActionButton':
        childrenAsMap.ctaButton = child;
        break;
      case 'Notification.CloseButton':
        childrenAsMap.closeButton = React.cloneElement(child, {
          size: 'small',
        });
        break;
    }
    return childrenAsMap;
  }, {});
}

class Notification extends React.PureComponent {
  notificationContentHeight;

  constructor(props) {
    super(props);
    this.notificationContent = React.createRef();
    this.state = {
      showContent: false,
      marginTop: 0,
    };
  }
  componentDidMount() {
    this.notificationContentHeight = `-${this.notificationContent.current.clientHeight}px`;
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.marginTop === this.notificationContentHeight &&
      this.state.marginTop !== this.notificationContentHeight
    ) {
      this.setState({ marginTop: 0 });
    }
  };

  closeNotification = () =>
    this.setState({
      showContent: false,
      marginTop: this.notificationContentHeight,
    });

  updateAfterTransition = () => {
    if (this.state.showContent) {
      this.setState({ marginTop: this.notificationContentHeight });
    }
  };

  _renderNotification() {
    const { zIndex, children, theme } = this.props;
    const { marginTop } = this.state;
    const childrenComponents = mapChildren(children);

    return (
      <div
        ref={this.notificationContent}
        data-hook={dataHooks.notificationWrapper}
        onTransitionEnd={this.updateAfterTransition()}
        style={{ zIndex, marginTop }}
        className={styles.notification}
        role="alert"
        aria-labelledby="notification-label"
        aria-live="polite"
      >
        {themeIcon[theme] && <div>{themeIcon[theme]}</div>}

        <div className={styles.labelWrapper}>
          {childrenComponents.label}
          {childrenComponents.ctaButton}
        </div>

        {childrenComponents.closeButton && (
          <div
            data-hook={dataHooks.notificationCloseButton}
            className={styles.closeButton}
            onClick={this.closeNotification}
            children={childrenComponents.closeButton}
          />
        )}
      </div>
    );
  }

  render() {
    const { dataHook, theme, type } = this.props;

    return (
      <div
        {...styles('root', { theme, type })}
        data-hook={dataHook}
        data-theme={theme}
        data-type={type}
      >
        {this._renderNotification()}
      </div>
    );
  }
}

const Close = props => <CloseButton skin="lightFilled" {...props} />;
Close.displayName = 'Notification.CloseButton';

Notification.displayName = 'Notification';

Notification.propTypes = {
  /** when set to `true`, notification is shown */
  show: PropTypes.bool,
  /** Notification theme */
  theme: PropTypes.oneOf([
    'standard',
    'error',
    'success',
    'warning',
    'premium',
  ]),
  /** Sets how <Notification/> should be displayed:
   * - `type="global"` will take up space and push the content down.
   * - `type="local"` will not take up space and will be displayed on top of content
   * - `type="sticky"` will not take up space and will be displayed at the top of whole page and on top of content (position: fixed;)
   * */
  type: PropTypes.oneOf([
    GLOBAL_NOTIFICATION,
    LOCAL_NOTIFICATION,
    STICKY_NOTIFICATION,
  ]),
  /** When provided, then the Notification will be hidden after the specified timeout. */
  autoHideTimeout: PropTypes.number,
  /** Notification z-index */
  zIndex: PropTypes.number,

  onClose: PropTypes.func,
  /** Can be either:
   * - `<Notification.TextLabel/>` (required)
   * - `<Notification.CloseButton/>`
   * -`<Notification.ActionButton/>` */
  children: PropTypes.node,
};

Notification.defaultProps = {
  theme: 'standard',
  type: GLOBAL_NOTIFICATION,
  onClose: null,
};

Notification.CloseButton = Close;
Notification.TextLabel = TextLabel;
Notification.ActionButton = ActionButton;

export default Notification;
