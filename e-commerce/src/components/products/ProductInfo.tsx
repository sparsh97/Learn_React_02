import React from 'react';
import styled from 'styled-components';
import { Galleria } from 'primereact/galleria';

const ProductInfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   padding-top: 1rem;
`;

function ProductInfo() {
  return (
    <ProductInfoWrapper>
      <div>
         <Galleria style={{ maxWidth: '640px' }} value={[]}  numVisible={5} thumbnailsPosition={'left'} />
      </div>
      <div>
         <p>Test</p>
      </div>
    </ProductInfoWrapper>
  )
}

export default ProductInfo;