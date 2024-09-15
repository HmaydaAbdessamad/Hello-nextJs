import React from 'react';

function Page({params}:{productId:string,viewId:string}) {
    return (
        <div>view number  {params.viewId} of the product number {params.productId}</div>
    );
}

export default Page;
