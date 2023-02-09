import { updateBlog } from "../../actionCreators/blogActions";

const updateBlogData = (id, blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://portfolio-server-iota-ten.vercel.app/blogs/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        const data = await res.json();

        if (data.modifiedCount > 0) {
            dispatch(updateBlog({ _id: id, ...blog }));
            return { status: 'success' }
        }
    }
}

export default updateBlogData;