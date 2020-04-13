import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectCoin = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`;

const useCoin = (label, initialState, COINS) => {
  const [state, setState] = useState(initialState);

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <SelectCoin onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">--Select--</option>
        {COINS.map((coin) => (
          <option key={coin.code} value={coin.code}>
            {coin.name}
          </option>
        ))}
      </SelectCoin>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCoin;
