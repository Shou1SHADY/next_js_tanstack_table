

import { notFound } from "next/navigation";

const ReviewId = ({ params }: {
    params: {
        productId: string,
        reviewId: string
    }


}) => {


    if (parseInt(params.reviewId) < 1000) {

        return notFound();

    }

    return (

        <p>

            Product {params.productId} Review {params.reviewId}
        </p>
    );
}

export default ReviewId;