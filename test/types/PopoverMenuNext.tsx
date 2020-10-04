import * as React from "react";
import PopoverMenu from "../../src/beta/PopoverMenu";
import { PopoverMenuTestkit as popoverMenuTestkitFactory } from '../../testkit/beta';
import { PopoverMenuTestkit as popoverMenuEnzymeTestkitFactory } from '../../testkit/beta/enzyme';
import * as enzyme from "enzyme";

function PopoverMenuWithMandatoryProps() {
  return <PopoverMenu triggerElement={<span/>} />;
}

function PopoverMenuNextWithAllProps() {
  return (
    <PopoverMenu
      triggerElement={<span/>}
      maxWidth={1}
      minWidth={1}
      zIndex={1}
      moveBy={{ x: 1, y: 1 }}
      placement="right-start"
      textSize= "small"
      appendTo="parent"
      flip
      fixed
      showArrow
      wrapText
      dataHook="hook"
    />
  );
}


function PopoverMenuNextWithMoveByX() {
  return (
    <PopoverMenu
      triggerElement={<span/>}
      moveBy={{ x: 1 }}
    />
  );
}

function PopoverMenuNextWithMoveByY() {
  return (
    <PopoverMenu
      triggerElement={<span/>}
      moveBy={{ y: 1 }}
    />
  );
}

async function testkits() {
  const testkit = popoverMenuTestkitFactory({
    dataHook: "hook",
    wrapper: document.createElement("div")
  });

  const enzymeTestkit = popoverMenuEnzymeTestkitFactory({
    dataHook: "hook",
    wrapper: enzyme.mount(<div />)
  });
}
