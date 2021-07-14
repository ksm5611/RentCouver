import useVisualMode from "../RefReqList/RefReqItem/useVisualMode";
import axios from "axios";
import ReceivedRef from "./ReceivedRef";
import Fade from 'react-reveal/Fade';

export default function Status({ record }) {
  const DEFAULT = "DEFAULT";
  const REQUESTED = "REQUESTED";
  const { mode, transition } = useVisualMode(DEFAULT);

  // post call for reference request
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

  const list = (
    <div className="drawer-content">
      <Fade bottom cascade>
        <div className="reference-container">
          <h4>Reference from {record.Property.User.name}</h4>
          <p>{record.review_content}</p>
        </div>
      </Fade>
    </div>
  )


  return (
    <tr className="tr-history">
      <Fade>
        <td>{record.Property.street},{" "}{record.Property.unit && <>#{record.Property.unit}</>}{" "}</td>
        <td>{record.Property.city}</td>
        <td>{record.Property.province}</td>
        <td>{record.Property.postal_code}</td>
        <td>{record.start_date} - {record.end_date}</td>
        <td>{record.Property.User.name}</td>
      </Fade>
      <td className="history-th-button">
        {mode === DEFAULT &&
          (record.is_requested === false ? (
            <Fade>
              <button
                className="primary-btn button action-button"
                onClick={() => {
                  refRequested(record);
                }}
              >
                REQUEST REFERENCE
            </button>
            </Fade>
          ) : record.review_content === null ? (
            <Fade><p>REQUESTED</p></Fade>
          ) : (
            <ReceivedRef reference={list} />
          ))}
        {mode === REQUESTED && <Fade><p>REQUESTED</p></Fade>}
      </td>
    </tr>
    // </Fade>
  );
}
