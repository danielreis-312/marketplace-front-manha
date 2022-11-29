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
import productService from "../../service/product.service";

export default function Produtos() {
  useEffect(() => {
    productService.getProducts().then((d) => {
      useData(d);
    });
  });
  const [data, useData] = useState([]);

  for (let i = 0; i < 10; i++) {
    const hoje = new Date();
    data.push({
      image: "image",
      name: `nome ${i}`,
      categoria: `categoria ${i}`,
      price: `R$ ${i},99`,
      createAt: hoje.toLocaleDateString(),
      id: i,
    });
  }

  const headers = ["FOTO", "NOME", "CATEGORIA", "PREÇO", "CRIADO EM", "AÇÕES"];

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
            <Link href="/produtos/cadastrar">
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
        <ItemTable data={data} headers={headers} detailLink="produtos" />
      </Card>
    </>
  );
}
