import { Link } from "react-router-dom";

const PostList = ({ title, posts }) => {

    return (  
        <div className="post-list">
            <h2>{ title }</h2>
            {posts.map( (post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{ post.title }</h2>
                        <p>written by { post.author } on { new Date(post.date).toLocaleDateString() } #{ post.category }</p>
                    </Link>     
                </div>
            ))}
        </div>
    );
}
 
export default PostList;