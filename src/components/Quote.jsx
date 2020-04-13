import React from "react";

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <div>
      <p>
        The price is: <span>{result.PRICE}</span>
      </p>
      <p>
        Max price: <span>{result.HIGHDAY}</span>
      </p>
      <p>
        Min price: <span>{result.LOWDAY}</span>
      </p>
      <p>
        Diff last 24hs: <span>{result.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Last update: <span>{result.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Quote;
