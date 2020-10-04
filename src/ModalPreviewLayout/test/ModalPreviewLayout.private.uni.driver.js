import { modalPreviewLayoutDriverFactory as publicDriverFactory } from '../ModalPreviewLayout.uni.driver';

export const modalPreviewLayoutPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
