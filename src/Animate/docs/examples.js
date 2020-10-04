export const bounceExample = `() => {

    const [ play, setPlay ] = React.useState(false)


    return (
        <Layout>
            <Cell><Button onClick={() => setPlay(true) }>Play</Button></Cell>
            <Cell>
                <Animate
                onEnter={()=> setPlay(true)}
                onEnter={()=> setPlay(false)}
                triggerAnimation={play}
                >
                    <FormField label="Field label">
                        <Input size="small" placeholder="Placeholder" />
                    </FormField>
                </Animate>
              </Cell>
            </Layout>
      )

}
`;
