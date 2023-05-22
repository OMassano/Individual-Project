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
    <div className={style.paginate}>
        {numPage > 1 ? (
        <div>
          <button onClick={prev} className={style.paragraph}>PREV</button>
          <p>{numPage - 1}</p>
        </div>
      ) : null}

      <h3>{numPage}</h3>

      {numPage < totalPages ? (
        <div>
          <p>{numPage + 1}</p>
          <button onClick={next} className={style.paragraph}>NEXT</button>
        </div>
      ) : null}
    </div>
  );
};

export default Paginate;
