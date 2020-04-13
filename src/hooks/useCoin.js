import React, { Fragment, useState } from "react";

const useCoin = () => {
  const [state, setState] = useState("");

  const Select = () => (
    <Fragment>
      <label>Coin</label>
      <select>
        <option value="ARG">Peso Argentino</option>
      </select>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCoin;
