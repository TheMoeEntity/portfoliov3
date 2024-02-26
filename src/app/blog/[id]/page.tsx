import dynamic from "next/dynamic";
const BlogSingle = dynamic(() => import("@/src/components/Blog"));

const Blog = () => {
    return (
        <BlogSingle />
    )
}

export default Blog