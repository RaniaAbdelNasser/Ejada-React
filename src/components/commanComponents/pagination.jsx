import React from "react";
import _ from "lodash";
import { Row } from 'react-bootstrap';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  //array for num of pages
  const pages = _.range(1, pageCount + 1);

  return (
    <Row className="mx-auto ">
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </Row>
  );
};

export default Pagination;
