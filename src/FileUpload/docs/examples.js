export const simple = `
<FileUpload onChange={files => console.log(files)}>
  <Button>Upload a File</Button>
</FileUpload>
`;
export const withMultipleAndAccept = `
<FileUpload
  onChange={files => console.log(files)}
  multiple
  accept=".jpeg,.gif,.png"
>
  <TextButton prefixIcon={<Icons.Image />}>Upload Images</TextButton>
</FileUpload>
`;
