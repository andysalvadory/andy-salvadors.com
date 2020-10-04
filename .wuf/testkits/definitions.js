/*
 * This file exports object with config for component testkits.
 * Ideally there should be no config, it is used for cases that are not following convention.
 *
 * this is temporary and should be treated as a TODO list of things to fix (make consistent)
 */

module.exports = {
  SideMenuDrill: {
    skipSanityTest: true,
    testkitPath: "../src/Deprecated/SideMenu/DrillView/DrillView.driver",
    protractorTestkitPath:
      "../src/Deprecated/SideMenu/DrillView/DrillView.protractor.driver",
    protractorTestkitExportName: "drillViewTestkitFactory",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'drillViewUniDriverFactory',
    puppeteerTestkitPath:
      "../src/Deprecated/SideMenu/DrillView/DrillView.uni.driver",
    puppeteerTestkitExportName: "drillViewTestkitFactory",
  },

  BadgeSelectItemBuilder: {
    skipSanityTest: true,
    noTestkit: true
  },

  BadgeSelect: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  TableActionCell: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  MultiSelect: {
    skipSanityTest: true, // testkit does not have root `exists` method

    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'multiselectUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  MultiSelectCheckbox: {
    skipSanityTest: true, // testkit does not have root `exists` method

    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'multiSelectCheckboxUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  MultiSelectComposite: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  DragAndDrop: { skipSanityTest: true, noTestkit: true },
  DragDropContextProvider: { skipSanityTest: true, noTestkit: true },

  EndorseContentLayout: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true
  },

  GoogleAddressInput: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true
  },

  GoogleAddressInputWithLabel: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually

    // the name of export has a typo, it's different than component name
    protractorTestkitExportName: "googleAddressWithInputTestkitFactory",
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Grid: { skipSanityTest: true, noTestkit: true },
  HBox: { skipSanityTest: true, noTestkit: true },
  Layout: { skipSanityTest: true, noTestkit: true },
  MessageBox: { skipSanityTest: true, noTestkit: true },

  Header: {
    testkitPath: "../src/Card/Header/Header.driver",
    // TODO: this is actually  Card.Header, but is exported just as header
    skipSanityTest: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "headerUniDriverFactory",
    protractorTestkitPath: "../src/Card/Header/Header.uni.driver",
    protractorTestkitExportName: "cardHeaderTestkitFactory",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: "headerUniDriverFactory",
    puppeteerTestkitPath: "../src/Card/Header/Header.uni.driver",
    puppeteerTestkitExportName: "cardHeaderTestkitFactory"
  },

  Page: {
    skipSanityTest: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  PageHeader: {
    skipSanityTest: true,
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'pageHeaderUniDriverFactory',
    puppeteerTestkitPath: '../src/PageHeader/PageHeader.uni.driver'
  },

  Popover: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  PopoverMenu: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  PopoverMenuItem: { skipSanityTest: true, noTestkit: true },
  TableToolbar: { skipSanityTest: true, noTestkit: true },
  Tooltip: { skipSanityTest: true, manualExport: true },
  VBox: { skipSanityTest: true, noTestkit: true },
  Collapse: { skipSanityTest: true, noTestkit: true },
  Card: { skipSanityTest: true, noTestkit: true },
  Composite: { skipSanityTest: true, noTestkit: true },
  FullTextView: { skipSanityTest: true, noTestkit: true },

  RichTextArea: {
    skipSanityTest: true,
    beforeAllHook: () => (window.getSelection = () => ({})),
    testkitPath: "../src/Deprecated/RichTextArea/RichTextArea.driver",
    protractorTestkitPath:
      "../src/Deprecated/RichTextArea/RichTextArea.protractor.driver",
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  RichTextAreaComposite: {
    skipSanityTest: true,
    beforeAllHook: () => (window.getSelection = () => ({})),
    testkitPath:
      "../src/Deprecated/RichTextAreaComposite/RichTextAreaComposite.driver",
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Avatar: {
    unidriver: true,
    testkitPath: "../src/Avatar/Avatar.uni.driver"
  },

  TextButton: {
    unidriver: true,
    testkitPath: "../src/TextButton/TextButton.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  IconButton: {
    unidriver: true,
    testkitPath: "../src/IconButton/IconButton.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  CloseButton: {
    unidriver: true,
    testkitPath: "../src/CloseButton/CloseButton.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  ToggleButton: {
    unidriver: true,
    testkitPath: "../src/ToggleButton/ToggleButton.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  CardGalleryItem: {
    unidriver: true,
    testkitPath: "../src/CardGalleryItem/CardGalleryItem.uni.driver"
  },

  SideMenu: {
    testkitPath: "../src/Deprecated/SideMenu/core/SideMenu.driver",

    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "sideMenuUniDriverFactory",
    protractorTestkitPath: "../src/Deprecated/SideMenu/core/SideMenu.uni.driver",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'sideMenuUniDriverFactory',
    puppeteerTestkitPath: '../src/Deprecated/SideMenu/core/SideMenu.uni.driver'
  },

  Button: {
    unidriver: true,
    testkitPath: "../src/Button/Button.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  Calendar: {
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'calendarUniDriverFactory',
    puppeteerTestkitPath: '../src/Calendar/Calendar.uni.driver',
  },

  CalendarPanel: {
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'calendarPanelUniDriverFactory',
    puppeteerTestkitPath: '../src/CalendarPanel/CalendarPanel.uni.driver',
  },

  CalendarPanelFooter: {
    unidriver: true,
    testkitPath: "../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  ContactItemBuilder: {
    skipSanityTest: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "contactItemBuilderUniDriverFactory",
    protractorTestkitPath:
      "../src/ContactItemBuilder/ContactItemBuilder.uni.driver",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: "contactItemBuilderUniDriverFactory",
    puppeteerTestkitPath:
      "../src/ContactItemBuilder/ContactItemBuilder.uni.driver",
  },

  Draggable: {
    testkitPath: "../src/DragAndDrop/Draggable/Draggable.driver",
    skipSanityTest: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  EditableRow: {
    testkitPath: "../src/EditableSelector/EditableRow/EditableRow.driver",
    unidriver: false, // TODO: component has unidriver, but it is exported as legacy driver. Changing it is a breaking change
    skipSanityTest: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "editableRowUniDriverFactory",
    protractorTestkitPath:
      "../src/EditableSelector/EditableRow/EditableRow.uni.driver",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'editableRowUniDriverFactory',
    puppeteerTestkitPath: '../src/EditableSelector/EditableRow/EditableRow.uni.driver',
  },

  FieldLabelAttributes: {
    testkitPath: "../src/FieldLabelAttributes/FieldLabelAttributes.driver",
    skipSanityTest: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  FieldWithSelectionComposite: {
    testkitPath:
      "../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver",
    protractorTestkitPath:
      "../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.protractor.driver",
    skipSanityTest: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Carousel: {
    drivers: ["enzyme"],
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'carouselUniDriverFactory',
    puppeteerTestkitPath: '../src/Carousel/Carousel.uni.driver'
  },

  Input: {
    puppeteerUnidriver: true
  },

  NumberInput: {
    unidriver: true,
    testkitPath: "../src/NumberInput/NumberInput.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  FloatingNotification: {
    unidriver: true,
    drivers: ["enzyme"],
    testkitPath: "../src/FloatingNotification/FloatingNotification.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  DatePicker: {
    skipSanityTest: true, // testkit does not have root `exists` method
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Proportion: {
    unidriver: true,
    drivers: ["enzyme"],
    testkitPath: "../src/Proportion/Proportion.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  Dropdown: {
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'dropdownUniDriverFactory',
    puppeteerTestkitPath: '../src/Dropdown/Dropdown.uni.driver',
  },

  DropdownBase: {
    unidriver: true,
    testkitPath: "../src/DropdownBase/DropdownBase.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  RadioButton: {
    testkitPath: "../src/RadioGroup/RadioButton/RadioButton.driver",
    protractorTestkitPath:
      "../src/RadioGroup/RadioButton/RadioButton.protractor.driver",
    skipSanityTest: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  RadioGroup: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  MessageBoxMarketerialLayout: {
    skipSanityTest: true,

    testkitPath:
      "../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver",
    protractorTestkitPath:
      "../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver",
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "messageBoxMarketerialLayoutUniDriverFactory",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'messageBoxMarketerialLayoutUniDriverFactory',
    puppeteerTestkitPath: '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver'
  },

  MessageBoxFunctionalLayout: {
    skipSanityTest: true,

    testkitPath:
      "../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver",

    protractorTestkitPath:
      "../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.protractor.driver",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'MessageBoxFunctionalLayoutUniDriverFactory',
    puppeteerTestkitPath: '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver'
  },

  Box: {
    unidriver: true,
    testkitPath: "../src/Box/Box.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: "BoxDriver"
  },

  Thumbnail: {
    unidriver: true,
    testkitPath: "../src/Thumbnail/Thumbnail.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  SegmentedToggle: {
    unidriver: true,
    testkitPath: "../src/SegmentedToggle/SegmentedToggle.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  RichTextInputArea: {
    unidriver: true,
    testkitPath: "../src/RichTextInputArea/RichTextInputArea.uni.driver",
    namedProtractorTestkitExport: true
  },

  DateInput: {
    unidriver: true,
    testkitPath: "../src/DateInput/DateInput.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  ColorInput: {
    unidriver: true,
    testkitPath: "../src/ColorInput/ColorInput.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  EditableTitle: {
    testkitPath: "../src/EditableTitle/EditableTitle.uni.driver",
    unidriver: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "editableTitleUniDriverFactory",
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: "editableTitleUniDriverFactory",
  },

  GooglePreview: {
    unidriver: true,
    testkitPath: "../src/GooglePreview/GooglePreview.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Accordion: {
    unidriver: true,
    testkitPath: "../src/Accordion/Accordion.uni.driver",
    namedProtractorTestkitExport: true
  },

  SocialPreview: {
    unidriver: true,
    testkitPath: "../src/SocialPreview/SocialPreview.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  ErrorIndicator: {
    unidriver: true,
    testkitPath: "../src/ErrorIndicator/ErrorIndicator.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  CardSubheader: {
    unidriver: true,
    skipSanityTest: true,
    testkitPath: "../src/Card/Subheader/Subheader.uni.driver",
    protractorTestkitExportName: "subheaderTestkitFactory",
    namedProtractorTestkitExport: true,

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitExportName: "subheaderTestkitFactory",
  },

  ListItemAction: {
    unidriver: true,
    testkitPath: "../src/ListItemAction/ListItemAction.uni.driver",
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "ListItemActionDriverFactory",
    protractorTestkitExportName: "ListItemActionTestkitFactory",

    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: "ListItemActionDriverFactory",
    puppeteerTestkitExportName: "ListItemActionTestkitFactory",
  },

  Swatches: {
    unidriver: true,
    testkitPath: "../src/Swatches/Swatches.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Sidebar: {
    unidriver: true,
    testkitPath: "../src/Sidebar/Sidebar.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Selector: {
    unidriver: false, // TODO: component has unidriver, but it is exported as legacy driver. Changing it is a breaking change
    testkitPath: "../src/Selector/Selector.driver",
    noProtractorTestkit: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Stepper: {
    unidriver: true,
    testkitPath: "../src/Stepper/Stepper.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  SidebarSectionTitle: {
    unidriver: true,
    testkitPath: "../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver",
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
  },

  SidebarSectionItem: {
    unidriver: true,
    testkitPath: "../src/SidebarSectionItem/SidebarSectionItem.uni.driver",
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
  },

  SidebarDivider: {
    unidriver: true,
    testkitPath: "../src/SidebarDivider/SidebarDivider.uni.driver",
    namedPuppeteerTestkitExport: true,
  },

  SidebarHeader: {
    unidriver: true,
    testkitPath: "../src/SidebarHeader/SidebarHeader.uni.driver",
    namedPuppeteerTestkitExport: true,
  },

  LinearProgressBar: {
    puppeteerUnidriver: true,
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  CircularProgressBar: {
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true
  },

  NoBorderInput: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true
  },

  Modal: {
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "modalUniDriverFactory",
    protractorTestkitPath: "../src/Modal/Modal.uni.driver",

    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'modalUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  ModalSelectorLayout: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  TimeInput: {
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "timeInputUniDriverFactory",
    protractorTestkitPath: "../src/TimeInput/TimeInput.uni.driver",

    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'timeInputUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Notification: {
    protractorUnidriver: true,
    namedProtractorTestkitExport: true,
    protractorTestkitImportName: "notificationUniDriverFactory",
    protractorTestkitPath: "../src/Notification/Notification.uni.driver",

    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: "notificationUniDriverFactory",
    puppeteerTestkitPath: "../src/Notification/Notification.uni.driver",
  },

  Skeleton: {
    noProtractorTestkit: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  SortableList: {
    noProtractorTestkit: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  NestableList: {
    noProtractorTestkit: true,
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Badge: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'badgeUniDriverFactory',
    namedPuppeteerTestkitExport: true
  },

  CounterBadge: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  FloatingHelper: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  ToggleSwitch: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Label: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Highlighter: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  ColorPicker: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  FilePicker: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  Checkbox: {
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'checkboxUniDriverFactory',
  },

  Loader: {
    puppeteerUnidriver: true,
    namedPuppeteerTestkitExport: true,
    puppeteerTestkitImportName: 'loaderUniDriverFactory',
  },

  InputArea: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'inputAreaUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Search: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'searchUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  AutoComplete: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'autoCompleteUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  AutoCompleteComposite: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  EditableSelector: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'editableSelectorUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Tag: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'tagUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  InputWithOptions: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'inputWithOptionsUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Breadcrumbs: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'breadcrumbsUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  DataTable: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'dataTableUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  DropdownLayout: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'dropdownLayoutDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  EmptyState: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'emptyStateUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Tabs: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'tabsUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  StatsWidget: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'statsWidgetUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  AddItem: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'addItemUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  ImageViewer: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'imageViewerUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  SectionHelper: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'sectionHelperUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  GenericModalLayout: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'genericModalLayoutUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Slider: {
    puppeteerUnidriver: true,
    puppeteerTestkitImportName: 'sliderUniDriverFactory',
    namedPuppeteerTestkitExport: true,
  },

  Range: {
    noPuppeteerTestkit: true // was not exported before automation, keeping that way for now
  },

  ModalPreviewLayout: {
    unidriver: true,
    testkitPath: "../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver",
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  StatisticsWidget: {
    unidriver: true,
    testkitPath: "../src/StatisticsWidget/StatisticsWidget.uni.driver"
  },

  LabelledElement: {
    unidriver: true,
    testkitPath: "../src/LabelledElement/LabelledElement.uni.driver"
  },

  FillPreview: {
    unidriver: true,
    testkitPath: "../src/FillPreview/FillPreview.uni.driver",
  },
  
  FillButton: {
    unidriver: true,
    testkitPath: "../src/FillButton/FillButton.uni.driver"
  }
};
