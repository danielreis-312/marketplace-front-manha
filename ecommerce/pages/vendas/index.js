import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ItemTable from "../../components/ItemTable";

export default function Vendas() {
  const data = [];

  for (let i = 0; i < 10; i++) {
    const hoje = new Date()
    data.push({
      order: `#${i}`,
      client: `Cliente ${i}`,
      price: `R$ ${i},99`,
      createdAt: hoje.toLocaleDateString(),
      id: i,
    });
  }

  const headers = ["PEDIDO", "CLIENTE", "TOTAL",
                   "CRIADO EM", "AÇÕES"];

  return (
    <>
      <Card className="m-md-5 p-md-2">
        <h2 className="text-center">Vendas</h2>
        <Row className="pt-2">
          <Col md={12}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
        </Row>
        <ItemTable data={data} headers={headers} detailLink="vendas"/>
      </Card>
    </>
  );
}
