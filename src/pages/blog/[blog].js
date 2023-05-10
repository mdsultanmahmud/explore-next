import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter()
    const pageNo = router.query.blog 
    return (
        <div>
            <h1>This is {pageNo}</h1>
        </div>
    );
};

export default Blog;