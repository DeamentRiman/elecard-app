import React from 'react';
import styles from '../Pagination/index.module.scss';

const Pagination = ({cardsPerPage, totalCards, paginate}) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards/cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.mainPagination}>
      <ul className={styles.mainPaginationList}>
        {
          pageNumbers.map(number => (
            <li className={styles.mainPaginationItem} key = {number}> 
              <a className={styles.mainPaginationItemLink} href='!#' onClick={()=> paginate(number)}>{number}</a>
            </li>
          )) 
        }
      </ul>
    </div>
  )
}
export default Pagination;