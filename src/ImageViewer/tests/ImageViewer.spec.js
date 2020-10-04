import React from 'react';
import ImageViewer from '../ImageViewer';

import ImageViewerDriverFactory from '../ImageViewer.driver';
import { imageViewerUniDriverFactory } from '../ImageViewer.uni.driver';

import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';

describe('ImageViewer', () => {
  const renderComponent = (props = {}) => <ImageViewer {...props} />;

  describe('[sync]', () => {
    runTests(createRendererWithDriver(ImageViewerDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(imageViewerUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());
    const imageUrl = 'some-image-url.png';

    describe('`disabled` prop', () => {
      it('should render enabled component by default', async () => {
        const { driver } = render(renderComponent({}));
        expect(await driver.isDisabled()).toBe(false);
      });
      it('should render enabled component', async () => {
        const { driver } = render(renderComponent({ disabled: false }));
        expect(await driver.isDisabled()).toBe(false);
      });
      it('should render disabled component', async () => {
        const { driver } = render(renderComponent({ disabled: true }));
        expect(await driver.isDisabled()).toBe(true);
      });
      it('should not render error once component disabled', async () => {
        const props = { disabled: true, error: true, errorMessage: 'Oops!' };
        const { driver } = render(renderComponent(props));
        expect(await driver.isDisabled()).toBe(true);
        expect(await driver.isErrorVisible()).toBe(false);
      });
      it('should not render update/remove buttons', async () => {
        const props = { disabled: true, imageUrl };
        const { driver } = render(renderComponent(props));
        expect(await driver.updateButtonExists()).toBe(false);
        expect(await driver.removeButtonExists()).toBe(false);
      });
    });

    describe('`imageUrl` prop', () => {
      it('should display image url [when] given', async () => {
        const { driver } = render(renderComponent({ imageUrl }));
        expect(await driver.getImageUrl()).toBe(imageUrl);
      });

      it('should not display image [when] not given', async () => {
        const { driver } = render(renderComponent({ imageUrl: '' }));
        expect(await driver.isImageVisible()).toBe(false);
      });
    });

    describe('AddItem', () => {
      it('should be visible [when] imageUrl is not given', async () => {
        const { driver } = render(renderComponent({ imageUrl: '' }));
        expect(await driver.isAddItemVisible()).toBe(true);
      });

      it('should not be visible [when] imageUrl is given', async () => {
        const { driver } = render(renderComponent({ imageUrl }));
        expect(await driver.isAddItemVisible()).toBe(false);
      });

      it('should show tooltip [when] addImageInfo is given', async () => {
        const addImageInfo = 'add image info';
        const { driver } = render(
          renderComponent({ imageUrl: '', addImageInfo }),
        );
        expect(await driver.getAddTooltipContent()).toBe(addImageInfo);
      });

      describe('`onAddImage` prop', () => {
        it('should trigger add image [when] onAddImage is given', async () => {
          const onAddImage = jest.fn();
          const { driver } = render(renderComponent({ onAddImage }));
          await driver.clickAdd();
          expect(onAddImage).toHaveBeenCalled();
        });
      });
    });

    describe('Update Button', () => {
      describe('`onUpdateImage` prop', () => {
        it('should call callback [when] clicked on update button', async () => {
          const onUpdateImage = jest.fn();
          const { driver } = render(
            renderComponent({ onUpdateImage, imageUrl }),
          );
          await driver.clickUpdate();
          expect(onUpdateImage).toHaveBeenCalled();
        });
      });

      describe('toooltip', () => {
        it('should display provided content', async () => {
          const updateImageInfo = 'update image info';
          const props = { imageUrl, updateImageInfo };
          const { driver } = render(renderComponent(props));
          expect(await driver.getUpdateTooltipContent()).toBe(updateImageInfo);
        });
      });
    });

    describe('Remove Button', () => {
      describe('`onRemoveImage` prop', () => {
        it('should call callback [when] clicked on remove button', async () => {
          const onRemoveImage = jest.fn();
          const { driver } = render(
            renderComponent({ onRemoveImage, imageUrl }),
          );
          await driver.clickRemove();
          expect(onRemoveImage).toHaveBeenCalled();
        });
      });

      describe('toooltip', () => {
        it('should display provided content', async () => {
          const removeImageInfo = 'remove image info';
          const props = { imageUrl, removeImageInfo };
          const { driver } = render(renderComponent(props));
          expect(await driver.getRemoveTooltipContent()).toBe(removeImageInfo);
        });
      });
    });

    describe('Error Icon', () => {
      it('should not be visible by default', async () => {
        const props = {
          imageUrl: '',
          width: 300,
          height: 300,
        };
        const { driver } = render(renderComponent(props));
        expect(await driver.isErrorVisible()).toBe(false);
      });

      describe('toooltip', () => {
        it('should display provided content', async () => {
          const errorMessage = 'error message';
          const props = {
            imageUrl: '',
            width: 300,
            height: 300,
            error: true,
            errorMessage,
          };
          const { driver } = render(renderComponent(props));
          expect(await driver.getErrorTooltipContent()).toBe(errorMessage);
        });
      });
    });

    describe('styles', () => {
      describe('height and width', () => {
        it('should be added to style attribute when image is not present', async () => {
          const props = {
            imageUrl: '',
            width: 300,
            height: 300,
          };
          const { driver } = render(renderComponent(props));
          expect(await driver.getContainerStyles()).toEqual(
            'width: 300px; height: 300px;',
          );
        });

        it('should be added to style attribute when image is present', async () => {
          const props = {
            imageUrl,
            width: 300,
            height: 300,
          };
          const { driver } = render(renderComponent(props));
          expect(await driver.getContainerStyles()).toEqual(
            'width: 300px; height: 300px;',
          );
        });

        it('should not add style attribute when width and height props are not passed', async () => {
          const props = {
            imageUrl,
          };
          const { driver } = render(renderComponent(props));
          expect(await driver.getContainerStyles()).toEqual(null);
        });
      });
    });
  }
});
