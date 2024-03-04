// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';



function CardMap({ data, val }) {
  return (
    <>
      {data
        .filter((ele) => ele.content === val)
        .map((ele) => (
          <Card key={ele.id} data={ele} />
        ))}
    </>
  );
}

export default CardMap;

CardMap.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
      
      })
    ).isRequired,
    val: PropTypes.string.isRequired,
  };