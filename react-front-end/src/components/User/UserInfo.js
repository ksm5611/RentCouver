// import { Button } from 'react-bootstrap';
import { List } from 'rsuite';

export default function UserInfo() {
  const userList = [
    'Contact Information',
    'Messages',
    'Recent Activity'
  ]

  const settings = [
    'Edit MyAccount',
    'Preferences',
    'Notifications',
    'Privacy and Safety'
  ]
  return (
    <section className="user-info-wrapper">
      <div>
        <div>

          {/* <section>
            <ul>
              
            </ul>
          </section>
          <section>

          </section> */}
          <List bordered className="user-info-list">
            <List.Item id= "my-info-label">User Information</List.Item>
            {userList.map((item, index) => (
              <List.Item key={index} index={index}>
                {item}
              </List.Item>
            ))}
          </List>
          <List bordered className="user-info-list">
            <List.Item id= "my-info-label">Account Settings</List.Item>
            {settings.map((item, index) => (
              <List.Item key={index} index={index}>
                {item}
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    </section>
  )
}