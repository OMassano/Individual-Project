import React from "react";
import style from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/action";
const Paginate = ({totalPages}) => {
  const dispatch = useDispatch();
  const { numPage } = useSelector((state) => state);
  const next = () => {
    dispatch(nextPage());
  };

  const prev = () =>{
    dispatch(prevPage())
  }
  
return (
  <div className={style.container}>
    {numPage > 1 ? (
      <div className={style.paginate}>
        <button onClick={prev} className={style.button}>
          PREV
        </button>
        <p>{numPage - 1}</p>
      </div>
    ) : null}

    <h3 className={style.centered}>{numPage}</h3>

    {numPage < totalPages ? (
      <div className={style.paginate}>
        <p>{numPage + 1}</p>
        <button onClick={next} className={style.button}>
          NEXT
        </button>
      </div>
    ) : null}
  </div>
);
};

export default Paginate;
