import React from 'react';

function ProductDetails({params}:{productId:string}) {
    console.log(params)
    return (
        <div>details of product {params.productId}</div>
    );
}

export default ProductDetails;
