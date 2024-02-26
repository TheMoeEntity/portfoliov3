import dynamic from "next/dynamic";
const Blogs = dynamic(() => import("@/src/components/BlogPage"));

const Blog = () => {
    return (
        <Blogs />
    )
}

export default Blog