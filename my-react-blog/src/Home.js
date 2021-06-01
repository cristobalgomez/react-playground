
import { useState } from 'react';
import useFetch from './useFetch';
import PostList from './PostList';
import Categories from './Categories';


const Home = () => {
    const { data: posts, isPending, error } = useFetch("http://localhost:8000/posts");
    const { data: categories, isCategoryPending, errorCategory } = useFetch("http://localhost:8000/categories");
    const [ filteredPosts, setFilteredPosts ] = useState(false);

    const sortByDate = (arr) => (arr.slice().sort( (a, b) => {
            return new Date(b.date) - new Date(a.date); // descending
    }));

    const filterPosts = (arr, category) => (arr.filter(post => post.category === category));
    
    const handleCategory = (category) => setFilteredPosts(category);

    return (  
        <div className="home">
            
            { errorCategory && <div> { errorCategory }</div>}
            { isCategoryPending && <div>Loading categories...</div> }
            { categories && <Categories categories={ categories } handleCategory={ handleCategory } filteredPosts={filteredPosts} /> }

            { error && <div> { error }</div>}
            { isPending && <div>Loading...</div> }
            { !filteredPosts && posts && <PostList posts={ sortByDate(posts) } title="All Posts!" /> }
            { filteredPosts && <PostList posts={filterPosts(sortByDate(posts), filteredPosts)} title={filteredPosts+" Posts!"} /> }
        </div>
    );
}

export default Home;