import Topbar from "./topbar";
import OrderList from "./orderList";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./common.css";

const OrderMain = () => {
  return (
    <Col className="content-wrapper">
      <Topbar />
      <div className="border"></div>
      <Row className="p-3 bg-color justify-content-between align-items-center">
        <Col className="justify-content-start"><h5 className="text-size">ORDERS</h5></Col>
        <Col className="breadcrumb justify-content-end">
          Ecommerce / <span className="text-color">Orders</span>
        </Col>
      </Row>
      <div className="border"></div>
      <div className="order-content">
        <OrderList />
      </div>
    </Col>
  );
};

export default OrderMain;
