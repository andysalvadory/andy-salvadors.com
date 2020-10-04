import * as React from 'react';
import BaseModalLayout from '..';

function baseModalLayoutWithMandatoryProps() {
  return <BaseModalLayout />;
}

function baseModalLayoutWithAllProps() {
  return (
    <BaseModalLayout
      className={'cls'}
      dataHook={'BML-dh'}
      onCloseButtonClick={() => {}}
      theme={'standard'}
    />
  );
}
