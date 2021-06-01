const Categories = ({ categories, handleCategory, filteredPosts }) => {
    return ( 
        <ul className="category">
        { 
            categories.map( (cat, i) => (
                <li key={ i }><button className={filteredPosts===cat ? "active" : ""} key={ i } onClick={ () => handleCategory(cat) }>{ cat }</button></li>
            )) 
        }
        { filteredPosts && <li> <button className="close" onClick={ () => handleCategory(false)}>X</button> </li> }
        </ul>  
     );
}
 
export default Categories;