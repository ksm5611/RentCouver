import RefReqItem from "./RefReqItem/index";
import "../../App.css";

export default function ReqRefList() {

  return (
    <div>
      <div className="hero-wrapper">
        <section className="hero-container second-hero-container">
          <h2>Reference Requests </h2>
        </section>
      </div>
      <div className="wrapper">
        <table className="table-container">
          <thead>
            <tr className="tr-heading">
              <th>Tenant's name</th>
              <th>Property Address</th>
              <th className="reference-th-action">Action</th>
            </tr>
          </thead>
          <tbody>
            <RefReqItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
