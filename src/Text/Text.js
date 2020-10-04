import React from 'react';
import RawText from './RawText';
import style from './Text.st.css';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';

const TextWithEllipsis = ({ className, ...props }) => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);
  return (
    <Ellipsis
      {...ellipsisProps}
      // TODO - with Stylable3 change to wrapperClassName
      wrapperClasses={style('root', { size: props.size, weight: props.weight })}
      render={({ ref, ellipsisClasses }) => (
        <RawText
          {...componentProps}
          ref={ref}
          className={ellipsisClasses(className)}
        />
      )}
    />
  );
};

TextWithEllipsis.displayName = 'Text';

TextWithEllipsis.propTypes = {
  ...RawText.propTypes,
  ...Ellipsis.propTypes,
};

TextWithEllipsis.defaultProps = {
  ...RawText.defaultProps,
  ...Ellipsis.defaultProps,
};

export default TextWithEllipsis;
