import React from 'react'
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import ReactDOM from 'react-dom';
import 'rsuite/dist/styles/rsuite-default.css';

// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

// function Sidebar({ items }) {
//   return (
//     <div className="sidebar">
//       <List disablePadding dense>
//         {items.map(({ label, name, items: subItems, ...rest }) => (
//           <React.Fragment key={name}>
//             <ListItem style={{ paddingLeft: 18 }} button {...rest}>
//               <ListItemText>{label}</ListItemText>
//             </ListItem>
//             {Array.isArray(subItems) ? (
//               <List disablePadding>
//                 {subItems.map((subItem) => (
//                   <ListItem key={subItem.name} button>
//                     <ListItemText className="sidebar-item-text">
//                       {subItem.label}
//                     </ListItemText>
//                   </ListItem>
//                 ))}
//               </List>
//             ) : null}
//           </React.Fragment>
//         ))}
//       </List>
//     </div>
//   )
// }

function SideBar () {
  const instance = (
    <div style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              User Group
            </Nav.Item>
            <Dropdown eventKey="3" title="Advanced" icon={<Icon icon="magic" />}>
              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            </Dropdown>
            <Dropdown
              eventKey="4"
              title="Settings"
              icon={<Icon icon="gear-circle" />}
            >
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
    return (
      <>
        {instance}
      </>
    )
}

export default SideBar