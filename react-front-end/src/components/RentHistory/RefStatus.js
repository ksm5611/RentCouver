import useVisualMode from "../RefReqList/RefReqItem/useVisualMode";
import axios from "axios";
import ReceivedRef from "./ReceivedRef";
import { Button } from "@material-ui/core";

export default function Status({ record }) {
  const DEFAULT = "DEFAULT";
  const REQUESTED = "REQUESTED";
  const { mode, transition } = useVisualMode(DEFAULT);

  const refRequested = async (historyRecord) => {
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
      {/* <div className="history-info">
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
      </div> */}
      <tr className="tr-history">
        <td>{record.Property.street},{" "}{record.Property.unit && <>#{record.Property.unit}</>}{" "}</td>
        <td>{record.Property.city}</td>
        <td>{record.Property.province}</td>
        <td>{record.Property.postal_code}</td>
        <td>{record.start_date} - {record.end_date}</td>
        <td>{record.Property.User.name}</td>


        <div className="th-action">
          {mode === REQUESTED && <p>REQUESTED</p>}
          {mode === DEFAULT &&
            (record.is_requested === false ? (
              <Button
                variant="contained"
                onClick={() => {
                  refRequested(record);
                }}
              >
                Request Reference
              </Button>
            ) : record.review_content === null ? (
              REQUESTED
            ) : (
              <ReceivedRef reference={record.review_content} />
            ))}
        </div>
      </tr>
    </>
  );
}
