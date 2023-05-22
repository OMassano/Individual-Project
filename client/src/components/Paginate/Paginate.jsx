import React from "react";
import style from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../../redux/action";
const Paginate = () => {
  const dispatch = useDispatch();
  const { numPage } = useSelector((state) => state);
  const next = () => {
    dispatch(nextPage());
  };
  return (
    <div className={style.paginate}>
      <p>{numPage - 1}</p>
      <p>{numPage}</p>
      <p>{numPage + 1}</p>
      <button onClick={next}>NEXT</button>
    </div>
  );
};

export default Paginate;
