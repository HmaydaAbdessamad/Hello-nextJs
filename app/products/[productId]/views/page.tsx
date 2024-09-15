import React from 'react';

function Page({params}:{productId:string}) {

    return (
        <div> views of product {params.productId}</div>
    );
}

export default Page;
