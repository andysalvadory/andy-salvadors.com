import React from 'react';
import Box from '../Box';
import styles from './GallerySidepanel.st.css';
import Heading from '../Heading';
import Tabs from '../Tabs';
import Thumbnail from '../Thumbnail';
import Divider from '../Divider';
import Slider from '../Slider';
import NumberInput from '../NumberInput';
import Button from '../Button';
import RadioGroup from '../RadioGroup';
import FormField from '../FormField';
import Palette from '../Palette';
import ToggleSwitch from '../ToggleSwitch';
import MultiSelectCheckbox from '../MultiSelectCheckbox';
import DatePicker from '../DatePicker';
import Loader from '../Loader';
import AddItem from '../AddItem';

class GallerySidepanel extends React.PureComponent {
  state = {
    selectedLayout: 0,
    activeTab: 2,
    sliderValue1: 3,
    sliderValue2: 20,
    toggleSwitchValue: true,
  };

  render() {
    const { disabled, palette } = this.props;
    const {
      activeTab,
      selectedLayout,
      sliderValue1,
      sliderValue2,
      toggleSwitchValue,
    } = this.state;
    return (
      <Box direction="vertical" className={styles.root}>
        <Box className={styles.header}>
          <Heading appearance="H3" weight="normal">
            Gallery Settings
          </Heading>
        </Box>

        <Box direction="vertical" className={styles.body}>
          <Tabs
            activeId={activeTab}
            type="uniformFull"
            onClick={value => this.setState({ activeTab: value.id })}
            items={[
              { id: 1, title: 'Organize Media' },
              { id: 2, title: 'Layouts' },
            ]}
          />

          <Box margin={4} direction="vertical">
            <FormField label="Palette">
              <Box height="40px">
                <Palette fill={palette.slice(0, 7)} />
              </Box>
            </FormField>
          </Box>

          <Box margin={4}>
            <FormField label="Choose a gallery layout">
              <div className={styles.layouts}>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Thumbnail
                      disabled={disabled}
                      className={styles.layout}
                      key={i}
                      hideSelectedIcon
                      onClick={() => this.setState({ selectedLayout: i })}
                      selected={selectedLayout === i}
                      title={i + 1}
                    />
                  ))}
              </div>
            </FormField>
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4}>
            <FormField label="How many pages">
              <Box direction="horizontal">
                <Box>
                  <MultiSelectCheckbox
                    disabled={disabled}
                    popoverProps={{ appendTo: 'window' }}
                    options={Array(4)
                      .fill(0)
                      .map((_, id) => ({ id, value: id + 1 }))}
                    selectedOptions={[0, 1]}
                  />
                </Box>
                <Box width="50px" marginLeft={4}>
                  <AddItem disabled={disabled} size="tiny" />
                </Box>
              </Box>
            </FormField>
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4} direction="vertical">
            <Box className={styles.sliderWrapper}>
              <Box direction="vertical" className={styles.slider}>
                <FormField label="Images per row">
                  <Slider
                    disabled={disabled}
                    onChange={value => this.setState({ sliderValue1: value })}
                    min={1}
                    max={4}
                    value={sliderValue1}
                    displayMarks={false}
                  />
                </FormField>
              </Box>

              <NumberInput
                disabled={disabled}
                value={sliderValue1}
                min={1}
                max={4}
                onChange={value => this.setState({ sliderValue1: value })}
              />
            </Box>

            <Box className={styles.sliderWrapper}>
              <Box direction="vertical" className={styles.slider}>
                <FormField label="Spacing">
                  <Slider
                    disabled={disabled}
                    onChange={value => this.setState({ sliderValue2: value })}
                    min={0}
                    max={30}
                    value={sliderValue2}
                    displayMarks={false}
                  />
                </FormField>
              </Box>

              <NumberInput
                disabled={disabled}
                value={sliderValue2}
                min={0}
                max={30}
                onChange={value => this.setState({ sliderValue2: value })}
              />
            </Box>
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4}>
            <FormField label="Thumbnail Resize">
              <RadioGroup display="horizontal" value={1} disabled={disabled}>
                <RadioGroup.Radio value={1}>Crop</RadioGroup.Radio>
                <RadioGroup.Radio value={2}>Fit</RadioGroup.Radio>
              </RadioGroup>
            </FormField>
            <FormField label="Responsive">
              <ToggleSwitch
                disabled={disabled}
                size="large"
                checked={toggleSwitchValue}
                onChange={e =>
                  this.setState({ toggleSwitchValue: e.target.checked })
                }
              />
            </FormField>
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4}>
            <FormField label="Date">
              <DatePicker
                value={new Date('08/07/1986')}
                onChange={() => {}}
                disabled={disabled}
              />
            </FormField>
            <Loader />
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>
        </Box>

        <Box className={styles.buttons} margin={4}>
          <Box>
            <Button disabled={disabled} priority="secondary">
              Cancel
            </Button>
          </Box>
          <Box marginLeft={2}>
            <Button disabled={disabled}>Done</Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default GallerySidepanel;
