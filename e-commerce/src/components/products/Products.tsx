import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styled from "styled-components";
import axios from "axios";
import { Product } from "../../models/Products";

const CardWrapper = styled.div`
  padding: 0.5rem;
  margin-top: 8rem;
`;

const ProductCard = styled.div`
  .product-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 16px;
  }

  .product-item {
   width: 20rem;
   margin: 0.5rem;
  }
`;

function Products() {
  const [products, setProducts] = useState(new Array<Product>());
  useEffect(() => {
    axios
      .get("/products/getAll", {
        proxy: {
          host: "localhost",
          port: 9000,
          protocol: "http",
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        severity="secondary"
        icon="pi pi-times"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );
  return (
    <CardWrapper>
      <ProductCard>
        <div className="product-card">
          {products &&
            products.map((product: Product) => (
              <Card
                key={product.id}
                title={product.productName}
                subTitle="Card subtitle"
                footer={footer}
                header={header}
                className="md:w-5rem product-item"
              >
                <p className="m-0">{product.productDescription}</p>
              </Card>
            ))}
        </div>
      </ProductCard>
    </CardWrapper>
  );
}

export default Products;
