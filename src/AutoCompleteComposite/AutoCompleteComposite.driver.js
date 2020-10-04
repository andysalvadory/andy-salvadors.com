import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const autoCompleteDriverFactory = ({ element }) => {
  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element }),
    hasAutoComplete: () => !!element.querySelector('input'),
  };
};

export default autoCompleteDriverFactory;
