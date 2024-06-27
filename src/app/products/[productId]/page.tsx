const Product = ({ params }: {
    params: {
        productId: string
    }


}) => {
    return (<div className="">


        <p>   Product Detals with dynamic routing , product ''' {params.productId}</p>
    </div>);
}

export default Product;