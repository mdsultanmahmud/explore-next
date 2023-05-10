import Navbar from "@/components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

const index = ({ data }) => {
    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>This is our post page</h1>
            {
                data.map(post => <div key={post.id} style={{ margin: '20px' }}>
                    <h2>{post.title}</h2>
                    <Link href={`/post/${post.id}`}>
                        <button style={{ cursor: "pointer" }}>Details</button>
                    </Link>
                </div>)
            }
        </>
    );
};

export default index;