import user from "../assets/user.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./common.css";

const Topbar = () => {
  return (
    <Row className="p-3 bg-color justify-content-between align-items-center">
      <Col sm={4} className="form-outline searchContent">
        <span className="input-group-text border-0" id="search-addon">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </Col>
      <Col sm={8} className="user d-flex flex-row  justify-content-end align-items-center">
        <img src={user} alt="user" />
        <div className="user-info flex-column">
          <h5>Dave</h5>
          <span>Founder</span>
        </div>
      </Col>
    </Row>
  );
};

export default Topbar;
