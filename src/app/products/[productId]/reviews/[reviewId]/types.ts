// types.ts or in the same file

import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
    productId: string;
    reviewId: string;
}

export default Params;