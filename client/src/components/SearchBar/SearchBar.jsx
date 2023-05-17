// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getDogByName } from "../../redux/action";

// const SearchBar = (name) => {
//   const dogs = useSelector((state) => state.dogsName);
//   const dispatch = useDispatch();

//   const handleSearch = () => {
//     dispatch(getDogByName(name));
//   };

//   useEffect(() => {
//     dispatch(getDogByName(name));
//   }, [dispatch, name]);

//   return (
//     <div>
//       <input type="search" />
//       <button onClick={handleSearch}>Search by Breed</button>
//     </div>
//   );
// };

// export default SearchBar;