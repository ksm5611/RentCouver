// import { Button } from 'react-bootstrap';
import { List } from 'rsuite';

export default function UserInfo() {
  const userList = ['Date of birth: 11/11/2000','Current Address: 2405 Heather St. Vancouver BC','email address: example@gmail.com']
  return (
    <section className="user-info-wrapper">
      <div>
        <div>
          <List bordered>
            {userList.map((item, index) => (
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