import { toast } from "react-hot-toast";
import { createBlog } from "../../actionCreators/blogActions";

const postBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://portfolio-server-iota-ten.vercel.app/blogs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        const data = await res.json();

        if (data.insertedId) {
            dispatch(createBlog(data));
            toast('Blog posted!', {
                icon: '👏',
            });
        }
    }
}

export default postBlogData;