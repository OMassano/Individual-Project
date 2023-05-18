
const SearchBar = ({onSearch}) => {
return(
    <div>
        <input type="search" />
        <button onClick={onSearch}>Search by Breed</button>
    </div>
)
};

export default SearchBar;
