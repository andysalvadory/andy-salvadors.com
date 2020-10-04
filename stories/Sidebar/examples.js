export const importExample = `
import Sidebar from 'wix-style-react/Sidebar';
import SidebarHeader from 'wix-style-react/SidebarHeader';
import SidebarDivider from 'wix-style-react/SidebarDivider';
import SidebarSectionTitle from 'wix-style-react/SidebarSectionTitle';
import SidebarSectionItem from 'wix-style-react/SidebarSectionItem';
`;

export const businessManagerSidebar = `
class DesignedSidebar extends React.Component {
  _renderUpgradeButton = () => (
    <Box align="center" margin="24px 30px">
      <Button size="small" skin="premium">
        Upgrade
      </Button>
    </Box>
  );

  _renderTimer = () => (
    <Box align="space-between" verticalAlign="middle" margin="9px 24px" color="D80">
      <Box inline verticalAlign="middle">
        <Box
          width="8px"
          height="8px"
          borderRadius="50%"
          backgroundColor="G10"
          marginRight="10px"
        ></Box>
        <Text size="tiny" light>
          17:45
        </Text>
      </Box>
      <Icons.Sound />
    </Box>
  );

  _renderBackButton = text => (
    <Box margin="18px 24px">
      <TextButton prefixIcon={<Icons.ChevronLeft />} skin="light" size="small" weight="normal">
        {text}
      </TextButton>
    </Box>
  );

  _renderEditButton = () => (
    <Box align="center" margin="18px 0">
      <TextButton prefixIcon={<Icons.Edit />} skin="light" size="small" weight="normal">
        Edit Site
      </TextButton>
    </Box>
  );

  render() {
    return (
      <Box height="800px">
        <Sidebar selectedKey={'dashboard'}>
          <Sidebar.PersistentHeader>
            <Box direction="vertical">
              <SidebarHeader title="Site Name" subtitle="Role: Owner" />
              <SidebarDivider fullWidth />
            </Box>
          </Sidebar.PersistentHeader>

          <Sidebar.Item itemKey={'dashboard'}>
            <SidebarSectionItem>Dashboard</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'video-library'}>
            <SidebarSectionItem>Video Library</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'rest-menus'}>
            <SidebarSectionItem>Rest. Menus</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'rest-reservations'}>
            <SidebarSectionItem>Rest. Reservations</SidebarSectionItem>
          </Sidebar.Item>

          <SidebarDivider />

          <SidebarSectionTitle>Ascend by Wix</SidebarSectionTitle>

          <Sidebar.Item itemKey={'customer-management'}>
            <SidebarSectionItem>Customer Management</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'marketing-tools'}>
            <SidebarSectionItem>Marketing Tools</SidebarSectionItem>
          </Sidebar.Item>

          <SidebarDivider />

          <Sidebar.Item itemKey={'settings'}>
            <SidebarSectionItem>Settings</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item
            itemKey={'apps'}
            innerMenu={[
              <Sidebar.BackButton>{this._renderBackButton('Main menu')}</Sidebar.BackButton>,
              <SidebarSectionTitle>Apps</SidebarSectionTitle>,
              <Sidebar.Item itemKey={'app-market'}>
                <SidebarItemContextConsumer>
                  {({ selected }) => (
                    <SidebarSectionItem selected={selected}>App Market</SidebarSectionItem>
                  )}
                </SidebarItemContextConsumer>
              </Sidebar.Item>,
              <SidebarSectionItem suffix={<CounterBadge skin="danger"><SystemIcons.FormFieldErrorSmall /></CounterBadge>}>
                Manage Apps
              </SidebarSectionItem>,
            ]}
          >
            <SidebarSectionItem drillable>
              Apps
            </SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <Box direction="vertical">
              {this._renderUpgradeButton()}
              <SidebarDivider fullWidth />
              {this._renderTimer()}
              <SidebarDivider fullWidth />
              {this._renderEditButton()}
            </Box>
          </Sidebar.PersistentFooter>
        </Sidebar>
      </Box>
    );
  }
}
`;
