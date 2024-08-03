import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 0.5rem;
  margin-top: 8rem;
`;

const ProductCard = styled.div`
  .product-card {
    display: flex;
    justify-content: end;
    padding-top: 16px;
    width: 20rem;
  }
`;

function Products() {
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
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={footer}
            header={header}
            className="md:w-5rem"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
              sed consequuntur error repudiandae numquam deserunt quisquam
              repellat libero asperiores earum nam nobis, culpa ratione quam
              perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
      </ProductCard>
    </CardWrapper>
  );
}

export default Products;