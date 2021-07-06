import {
  ListItem,
  Avatar
} from "@material-ui/core";
import '../../../App.css';

export default function RefForm(props) {
  return (
    <ListItem className={props.classes}>
      <div className="req-info">
        <Avatar src="" />
        <p className="req-tenant">Felicia Okta</p>
        <p className="req-tenant address">property address</p>
      </div>
      <div className="option-btn">
        <p>Sent</p>
      </div>
    </ListItem>

  )
}