import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const modalPreviewLayoutDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Click the overlay */
    clickOverlay: () =>
      base.$('[data-hook="preview-modal-inner-overlay"]').click(),

    /** Get the title node */
    getPreviewTitle: () => base.$('[data-hook="preview-modal-title"]'),

    /** Get the actions node */
    getPreviewActions: () => base.$('[data-hook="preview-modal-actions"]'),

    /** Get the content node */
    getPreviewContent: () => base.$('[data-hook="preview-modal-content"]'),

    /** Click the close button */
    clickClose: () =>
      base.$('[data-hook="preview-modal-close-button"]').click(),
  };
};
