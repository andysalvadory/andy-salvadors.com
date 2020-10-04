export const skins = `
<Layout cols={2} gap={0} justifyItems="center" alignItems="center">
  <ToggleButton tooltipContent="Crop & Rotate">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" >
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const selected = `
<Layout cols={2} gap={0} justifyItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" selected>
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" selected>
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const disabled = `
<Layout cols={2} gap={0} justifyItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" disabled>
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" disabled>
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;
