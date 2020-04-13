import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
  span {
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;
const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <ResultDiv>
      <Price>
        The price is: <span>{result.PRICE}</span>
      </Price>
      <Info>
        Max price: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Min price: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Diff last 24hs: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last update: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultDiv>
  );
};

Quote.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Quote;
