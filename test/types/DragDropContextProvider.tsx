import * as React from "react";
import DragDropContextProvider from "../../src/DragDropContextProvider";

function dragDropContextProviderWithMandatoryProps() {
  return <DragDropContextProvider />;
}

function dragDropContextProviderWithAllProps() {
  return (
    <DragDropContextProvider
      backend={()=>{}}
    />
  );
}
