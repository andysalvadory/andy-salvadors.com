export const importExample = `
import FormField from 'wix-style-react/FormField';
import RichTextInputArea from 'wix-style-react/RichTextInputArea'
`;

export const plainFormFieldComposition = `
<FormField label="Rich Text Area">
  <RichTextInputArea />
</FormField>
`;

export const textStylingFormFieldComposition = `
<FormField label="Rich Text Area" infoContent="I help you to fill info" required>
  <RichTextInputArea initialValue="<p>This component supports bullet point lists and text styling:</p><ol><li><strong>Bold</strong></li><li><em>Italic</em></li><li><u>Underline</u></li><li><a href='https://github.com/wix/wix-style-react'>Hyperlink</a></li></ol>" />
</FormField>
`;
