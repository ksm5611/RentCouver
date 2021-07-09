import useVisualMode from "../RefReqList/RefReqItem/useVisualMode";
import axios from "axios";
import {
  Container,
  ListItem,
  List,
  Button,
  makeStyles,
  Avatar,
} from "@material-ui/core";

export default function Status({ record }) {
  const DEFAULT = "DEFAULT";
  const REQUESTED = "REQUESTED";
  const { mode, transition } = useVisualMode(DEFAULT);

  const refRequested = async (historyRecord) => {
    // if (historyRecordId === historyRecord.id) {

    try {
      await axios.post(`http://localhost:8000/api/reqReference`, {
        renthistories_id: historyRecord.id,
        tenant_id: historyRecord.tenant_id,
        landlord_id: historyRecord.Property.landlord_id,
        property_id: historyRecord.property_id,
      });
    } catch (error) {
      console.log(error);
    }
    transition(REQUESTED);
  };

  return (
    <>
      <div className="history-info">
        <p className="req-landlord address">
          {record.Property.street},{" "}
          {record.Property.unit && <>#{record.Property.unit}</>}{" "}
          {record.Property.city} {record.Property.province}{" "}
          {record.Property.postal_code}
        </p>
        <p className="req-landlord">
          {record.start_date} - {record.end_date}
        </p>
        <span>{record.Property.User.name}</span>
      </div>
      <div className="option-btn">
        {mode === REQUESTED && <p>REQUESTED</p>}
        {mode === DEFAULT &&
          (record.is_requested === false ? (
            <Button
              // className={classes.btn}
              variant="contained"
              onClick={() => {
                refRequested(record);
              }}
            >
              Request Reference
            </Button>
          ) : (
            REQUESTED
          ))}
      </div>
    </>
  );
}
