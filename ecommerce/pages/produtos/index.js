import Link from "next/link";
import { useEffect, useState } from "react";
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
import productService from "../../services/product.service";
import useAuth from "../../hooks/useAuth";

export default function Produtos() {
  useAuth();
  
  const [data, setData] = useState([]);

  useEffect(() => {
    productService.getProducts().then((r) => setData(r));
  }, []);

  const headers = ["FOTO", "NOME", "CATEGORIA", "PREÇO", "CRIADO EM", "AÇÕES"];

  return (
    <>
      <Card className="m-md-5 p-md-2">
        <h2 className="text-center">Produtos</h2>
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
            <Link href="/produtos/cadastrar">
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
        <ItemTable data={data} headers={headers} detailLink="produtos" editLink="produtos/editar" />
      </Card>
    </>
  );
}
