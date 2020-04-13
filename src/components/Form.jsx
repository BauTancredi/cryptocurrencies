import React, { Fragment, useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const [listCrypto, setListCrypto] = useState([]);
  const [error, setError] = useState(false);

  const COINS = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Sterling" },
    { code: "ARG", name: "Peso Argentino" },
  ];

  const [coin, SelectCoin] = useCoin("Choose your coin", "", COINS);
  const [crypto, SelectCrypto] = useCrypto(
    "Choose your crypto",
    "",
    listCrypto
  );

  useEffect(() => {
    const fetchAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setListCrypto(result.data.Data);
    };
    fetchAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (coin.trim() === "" || crypto.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        {error ? "Hay un error" : null}
        <SelectCoin />
        <SelectCrypto />
        <Button type="submit" value="Calculate" />
      </form>
    </Fragment>
  );
};

export default Form;
