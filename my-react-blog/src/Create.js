import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('tulio');
    const [category, setCategory] = useState('Tech')
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body, date: new Date().toISOString(), author, category };

        setIsPending(false);

        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(post)
        }).then(() => {
            console.log("new post added");
            setIsPending(false);
            history.push("/")
        });
    }

    return (  
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>
                <label>Post body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                    required></textarea>
                <label>Post author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="bodoque">bodoque</option>
                    <option value="tulio">tulio</option>
                </select>
                <label>Category post:</label>
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="Tech">Tech</option>
                    <option value="Sports">Sports</option>
                    <option value="Creativity">Creativity</option>
                </select>
                {!isPending && <button>Add post</button>}
                {isPending && <button disabled>Adding post...</button>}             
            </form>
        </div>
    );
}
 
export default Create;