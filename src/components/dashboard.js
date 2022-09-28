import SidebarMenu from "./sidebarMenu";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import OrderMain from "./orderMain";

import "./common.css";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="wrapper m-0">
        <SidebarMenu />
        <OrderMain />
      </Row>
    </Container>
  );
};

export default Dashboard;
