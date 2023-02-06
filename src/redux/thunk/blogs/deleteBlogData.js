import { toast } from "react-hot-toast";
import { deleteBlog } from "../../actionCreators/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://portfolio-server-iota-ten.vercel.app/blogs/${id}`, {
            method: "DELETE",
        })
        const data = await res.json();

        if (data.deletedCount) {
            dispatch(deleteBlog(id));
            toast('Blog deleted!', {
                icon: '👏',
            });
        }
    }
}

export default deleteBlogData;