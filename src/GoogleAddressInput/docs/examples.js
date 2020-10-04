export const sizes = `
<Layout>
  <Cell>
    <GoogleAPILoader>
    <GoogleAddressInput size='small' Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
    <Cell>
       <GoogleAPILoader>
    <GoogleAddressInput Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
    <Cell>
       <GoogleAPILoader>
    <GoogleAddressInput size='large' Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
</Layout>
`;

export const shapes = `
<Layout>
  <Cell>
    <GoogleAPILoader>
    <GoogleAddressInput Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
    <Cell>
       <GoogleAPILoader>
    <GoogleAddressInput roundInput={false} Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
</Layout>
`;

export const clearButton = `
<Layout>
  <Cell>
    <GoogleAPILoader>
    <GoogleAddressInput Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
    <Cell>
       <GoogleAPILoader>
    <GoogleAddressInput Client={clients.GoogleMapsClient}/>
    </GoogleAPILoader>
  </Cell>
</Layout>
`;

export const controlledGoogleAddressInput = `
class ControlledGoogleAddress extends React.PureComponent {

  state = { value: '' }

  render() {
    const { value } = this.state;

    return (
      <FormField label="Google Address Input:">
      <GoogleAPILoader>
        <GoogleAddressInput
          value={value}
          onChange={({target}) => this.setState({value: target.value})}
          onSet={e => this.setState({value: e.originValue})}
          Client={clients.GoogleMapsClient}
        />
      </GoogleAPILoader>
      </FormField>
    )
  }
}

`;
