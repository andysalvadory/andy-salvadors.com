import React, { createContext, useContext } from 'react';

const BaseModalLayoutContext = createContext();

function useBaseModalLayoutContext(props) {
  const context = useContext(BaseModalLayoutContext) || {};
  return { ...props, ...context };
}

export { BaseModalLayoutContext, useBaseModalLayoutContext };
