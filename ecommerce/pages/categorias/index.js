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

export default function Categorias() {
  const data = [];

  for (let i = 0; i < 10; i++) {
    const hoje = new Date();
    data.push({
      name: `Categoria ${i}`,
      createdAt: hoje.toLocaleDateString(),
      id: i,
    });
  }

  const headers = ["NOME", "CRIADO EM", "AÇÕES"];

  return (
    <>
      <Card className="m-md-5 p-md-2">
        <h2 className="text-center">Categorias</h2>
        <Row className="pt-2">
          <Col md={10}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
          <Col className="d-grid">
            <Link href="/categorias/cadastrar">
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
        <ItemTable data={data} headers={headers} detailLink="categorias" />
      </Card>
    </>
  );
}
