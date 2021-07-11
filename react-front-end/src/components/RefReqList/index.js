import RefReqItem from "./RefReqItem/index";
import "../../App.css";
import Flip from 'react-reveal/Flip';

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
              <Flip left cascade>
                <th></th>
                <th>Tenant's name</th>
                <th>Address</th>
                <th>City</th>
                <th>Province</th>
                <th>Postal Code</th>
                <th className="reference-th-action">Action</th>
              </Flip>
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
