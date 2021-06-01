import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="newpost">New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;