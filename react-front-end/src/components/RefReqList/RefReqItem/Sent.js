import { ListItem, Avatar } from "@material-ui/core";
import "../../../App.css";

export default function RefForm(props) {
  return (
    <ListItem className={props.classes}>
      <div className="option-btn">
        <p>Sent</p>
      </div>
    </ListItem>
  );
}
