import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import OrderTable from "./orderTable";
import data from "../data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import {useAsyncDebounce} from 'react-table'

import "./common.css";

const OrderList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [forceSelectionIds, setForceSelectionIds] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectRow, setSelectRow] = useState([]);

  useEffect(() => {
    setTableData(data.orders)
  },[])

  const selected = tableData.filter((item, idx) => {
    return Object.keys(forceSelectionIds).some((id) => {
      return idx === Number(id);
    });
  });


  useEffect(() => {
    setSelectRow(selected);
  }, [forceSelectionIds]);

  const Columns = React.useMemo(
    () => [
      {
        Header: "ORDER ID",
        accessor: "id",
      },
      {
        Header: "CUSTOMER",
        accessor: "customerId",
      },
      {
        Header: "PRODUCT",
        accessor: "product",
      },
      {
        Header: "ORDER DATE",
        accessor: "orderDate",
      },
      {
        Header: "AMOUNT",
        accessor: "orderAmount",
      },
      {
        Header: "PAYMENT METHOD",
        accessor: "paymentMethod",
      },
      {
        Header: "DELIVERY STATUS",
        accessor: "deliveryStatus",
        Cell: ({ cell: { value } }) => {
          const statusClass = (classname) => {
            switch(classname){
              case "cancelled": return "cancel"
              case "pending": return "pending"
              case "return": return "return"
              case "inprogress": return "inprogress"
              case "delivered": return "delivered"
              default: return ''
            }
          } 
          return(
            <div className={statusClass(value)}>{value}</div>
          )
        }
      },
      {
        Header: "ACTION",
        accessor: "action",
        Cell: (row) => (
          <div className="d-flex justify-content-center">
            <button>
              <i className="bi bi-eye-fill text-info"></i>
            </button>
            <button>
              <i className="bi bi-pencil text-info"></i>
            </button>
            <button>
              <i className="bi bi-trash3 text-danger"></i>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const Styles = styled.div`
    padding: 1rem;
    table {
      border-spacing: 0;
      width: 100%;
      padding: 0;
      border: 1px solid #d4d4d4;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;

        padding: 0.5rem;

        border-bottom: 1px solid #d4d4d4;

        border-right: 1px solid #d4d4d4;

        :last-child {
          border-right: 0;
        }
      }
    }
  `;

  return (
    <div className="p-3 card">
      <Row className="justify-content-between align-items-center">
        <Col sm={4}>
          <h5 className="text-size">Order History</h5>
        </Col>
        <Col
          sm={8}
          className="action-btns d-flex flex-row justify-content-end align-items-center"
        >
          <div className="create">
            <Button className="btn btn-success">+ Create Order</Button>
          </div>
          <div className="export">
            <Button className="btn btn-primary">
              <i className="bi bi-file-earmark-plus"></i>&nbsp;Export
            </Button>
          </div>
          <div className="delete">
            <Button className="btn btn-outline-danger">
              <i className="bi bi-trash3"></i>
            </Button>
          </div>
        </Col>
      </Row>
      <div className="py-4 d-flex flex-row justify-content-between align-items-center">
        <div className="form-outline searchbox">
          <span className="input-group-text border-0" id="search-addon">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className="order-table">
        <Styles>
          <OrderTable
            columns={Columns}
            data={tableData}
            onChangeSelectRowId={(selectedIds) => {
              setForceSelectionIds(selectedIds);
            }}
            searchKeyword={searchKeyword}
          />
        </Styles>
      </div>
    </div>
  );
};

export default OrderList;
