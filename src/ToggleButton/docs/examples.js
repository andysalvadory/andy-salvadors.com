export const skins = `
<Layout cols={3} gap={0} justifyItems="center" alignItems="center">
  <ToggleButton tooltipContent="Crop & Rotate">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="inverted" >
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" >
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const skinsWithText = `
<Layout cols={3} gap={0} justifyItems="center" alignItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" text="Bottom text" textPlacement="bottom">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="inverted" text="Side text" textPlacement="side">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" text="Hidden text" textPlacement="hidden">
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const shapes = `
<Layout cols={2} gap={0} justifyItems="center" alignItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" shape="square">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" shape="round">
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const sizes = `
<Layout cols={2} gap={0} justifyItems="center" alignItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" size="medium">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" size="large">
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

export const custom = `
<Layout cols={3} gap={0} justifyItems="center">
  <Box direction="vertical" align="center">
    <p>An &lt;a/&gt; tag</p>
    <ToggleButton as="a" href="https://www.wix.com" target="_blank"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A react router &lt;Link/&gt; tag</p>
    <ToggleButton as={Link} skin="premium" to="/home"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A native &lt;button/&gt; tag</p>
    <ToggleButton as="button" onClick={() => alert('yay')}><Icons.CropRotate /></ToggleButton>
  </Box>
</Layout>
`;
