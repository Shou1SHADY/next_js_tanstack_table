
const Docs = ({ params }: {
    params: {
        slug: string[]

    }
}) => {

    if (params.slug?.length === 2) {

        return (

            <p> 2 params {params.slug[0]}  element 2 {params.slug[1]}</p>

        )
    }
    else if (params.slug?.length === 1) {

        return (

            <p>1 param {params.slug[0]}</p>
        )
    }
    else {
        return (

            <p>Docs nesting collective dynamic routing</p>
        );
    }

}

export default Docs;