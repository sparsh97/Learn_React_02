import React, { useCallback, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from 'primereact/image';
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

  .p-card-header img {
    width: 50%;
    margin-left: 4rem;
  }
`;

function Products() {
  const [products, setProducts] = useState(new Array<Product>());
  const [pages, setPages] = useState('pageNumber=0&pageSize=8');
  const fetchProducts = useCallback(() => {
    axios
      .get(`/products/getAll?${pages}`, {
        proxy: {
          host: "localhost",
          port: 9000,
          protocol: "http",
        },
      })
      .then((response) => {
        console.log(response);
        setProducts(response?.data?.content);
      })
      .catch((error) => {
        console.log(error);
        setProducts([]);
      });
  },[pages]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const header = (product: Product) => (
    <Image
      alt="Card"
      src={product?.productImage?.[0]}
      preview
      loading="lazy"
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
            products?.map((product: Product) => (
              <Card
                key={product?.id}
                title={product?.productName}
                subTitle={product?.productCategory?.categoryName}
                footer={footer}
                header={() => header(product)}
                className="md:w-5rem product-item"
              >
                <p className="m-0">{product?.productDescription}</p>
              </Card>
            ))}
        </div>
      </ProductCard>
    </CardWrapper>
  );
}

export default Products;
