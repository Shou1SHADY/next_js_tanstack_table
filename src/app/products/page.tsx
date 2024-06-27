const ProductList = () => {


    const blogs = [{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }]
    return (
        <div>
            {
                blogs.map((blog) => (

                    <div className="" key={blog.id}>

                        <h1>    {blog.title}</h1>
                        <h3>   {blog.body}</h3>

                    </div>
                ))
            }

        </div>

    );
}

export default ProductList;