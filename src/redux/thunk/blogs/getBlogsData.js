import { getBlogs } from "../../actionCreators/blogActions";

const getBlogsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://portfolio-server-iota-ten.vercel.app/blogs/");
        const data = await res.json();
        
        if (data.length) {
            dispatch(getBlogs(data));
        }
    }
}

export default getBlogsData;