import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination d-flex justify-content-between">
        <Link to={`${currentPage-1}`}><div onClick={() => onPageChange(currentPage-1)}>Назад</div></Link>
        <div className="d-flex justify-content-center">
            {pages.map((page) => (
            <Link to={`${page}`} key={page}>
                <div className={"btn btn-link m-1"+ (page === currentPage ? "active" : "")} onClick={() => onPageChange(page)}>
                  {page}
                  </div>
            </Link>
            ))}
         </div>   
        <Link to={`${currentPage+1}`}><div onClick={() => onPageChange(currentPage+1)}>Далее</div></Link>
      </ul>
    </nav>
  );
};
export default Pagination;