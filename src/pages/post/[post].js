import Navbar from '@/components/Navbar';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map(post =>{
        return {
            params: {post: post.id.toString()}
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.post
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}
const Posts = ({data}) => {
    return (
        <div>
            <Navbar />
            <h1>{data.id}</h1>
            <p>{data.body}</p>
        </div>
    );
};
export default Posts;




