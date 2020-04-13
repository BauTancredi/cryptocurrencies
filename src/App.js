import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "@emotion/styled";
import img from "./cryptomonedas.png";
import Form from "./components/Form";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCrypto = async () => {
      if (coin === "") return null;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const result = await Axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setResult(result.data.DISPLAY[crypto][coin]);
      }, 3000);
    };
    quoteCrypto();
  }, [coin, crypto]);

  const component = loading ? <Spinner /> : <Quote result={result} />;

  return (
    <Container>
      <div>
        <Img src={img} alt="crypto img" />
      </div>
      <div>
        <Heading>instantly quote cryptocurrencies</Heading>

        <Form setCoin={setCoin} setCrypto={setCrypto} />
        {component}
      </div>
    </Container>
  );
}

export default App;
