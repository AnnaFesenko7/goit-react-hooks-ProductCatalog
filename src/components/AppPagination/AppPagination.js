import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const AppPagination = ({ pageCount, activePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === pageCount;

  const onPageNavigate = useCallback(
    index => {
      const params = new URLSearchParams(location.search);
      params.set('pageNumber', index + 1);
      console.log(params.toString());
      navigate(`?${params.toString()}`);
    },
    [location.search, navigate]
  );

  return (
    <Pagination
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {!isFirstPage && (
        <Pagination.Prev
          onClick={() => {
            onPageNavigate(activePage - 2);
          }}
        />
      )}
      {Array.from({ length: pageCount }).map((_, index) => (
        <Pagination.Item
          key={index}
          active={index === activePage - 1}
          onClick={() => onPageNavigate(index)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      {!isLastPage && (
        <Pagination.Next onClick={() => onPageNavigate(activePage)} />
      )}
    </Pagination>
  );
};
AppPagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default AppPagination;
